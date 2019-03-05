const path = require('path')
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const common = (entry) => ({
    entry : {
        main: entry, 
    },
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './assets/resume.png' },
            { from: './assets/resume-256.png' },
            { from: './assets/resume-512.png' },
            { from: './src/manifest.json' },
            { from: './src/404.html' },
            { from: './site-meta/robots.txt' },
            { from: './site-meta/sitemap.txt' },
            { from: './site-meta/README.md' }
        ]),
        new webpack.EnvironmentPlugin({"CONFIDENTIAL_MODE": false})
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.ts', '.tsx' ]
    },
})

const commonWeb = merge(common("./src/index.tsx"), {
    entry: {
        'service-worker': "./src/app/service-worker.js"
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./dist/index-ssr.html",
            hash: true
        })
    ]
})

module.exports = [
    merge(commonWeb, { 
        name: 'resume-web',
        devServer: {
            contentBase: path.join(__dirname, 'src'),
            port: 3000,
            publicPath: 'http://localhost:3000/',
            historyApiFallback: true,
            hot: false,
            inline: true,
            disableHostCheck: true,
            host: '0.0.0.0'
        },
        mode: 'development'
    }),
    merge(commonWeb, {
        name: 'resume-web-prod',
        plugins: [
            new BundleAnalyzerPlugin(),
        ],
        mode: 'production'
    }),
    merge(common('./src/index.ssr.tsx'), {
        name: 'resume-ssr', 
        target: 'node',
        externals: [nodeExternals()],
        plugins: [
            new CleanWebpackPlugin('./dist')
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ]
                }
            ]
        },
        mode: 'production',
    })
]