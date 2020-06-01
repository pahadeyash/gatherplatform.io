const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    mode: process.env.NODE_ENV,
    devServer: {
        contentBase: path.join(__dirname, "./build/"),
        publicPath: "/build/",
        historyApiFallback: true,
        hot: true,
        publicPath: '/',
        inline: true,
        // proxy: {
        //     "*": "http://[::1]:8080"
        //     // "secure": false,
        //     // "changeOrigin": true
        // }
        proxy: {
            '/':
            {
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true
            }
        },
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            output: "./public/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|JPG|jpeg|gif|woff|woff2|eot|ttf|svg|ico)$/,
                use: [
                    {
                        // loads files as base64 encoded data url if image file is less than set limit
                        loader: "url-loader",
                        // options: {
                        //   // if file is greater than the limit (bytes), file-loader is used as fallback
                        //   // limit: 900000
                        // }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};