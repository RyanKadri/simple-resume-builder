const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const common = (name, entry) => ({
    name,
    entry : {
        [name]: entry 
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
            { from: './src/manifest.json' }
        ])
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

const commonWeb = (name, entry, indexHtml) => merge(common(name, entry, indexHtml), {
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
    merge(commonWeb('resume-web', './src/index.tsx'), { 
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
    merge(commonWeb('resume-web-prod', './src/index.tsx'), {
        plugins: [
            new BundleAnalyzerPlugin(),
        ],
        mode: 'production'
    }),
    merge(common('resume-ssr', './src/index.ssr.tsx'), {
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