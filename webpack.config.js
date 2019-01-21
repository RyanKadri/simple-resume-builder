const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        name: 'resume',
        entry : {
            resume: './src/index.tsx'
        },
        devtool: 'source-map',
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, "dist"),
            publicPath: "/",
        },
        plugins: [
            new CleanWebpackPlugin(["/dist"]),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                meta: {
                    charset: "UTF-8",
                    viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                },
                hash: true
            })
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ]
                }
            ]
        },
        resolve: {
            extensions: [ '.js', '.ts', '.tsx' ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'src'),
            port: 3000,
            publicPath: 'http://localhost:3000/',
            historyApiFallback: true,
            hot: false,
            inline: true,
        },
        mode: 'development'
    }
]