const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

    // 模块
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    "less-loader"
                ]
            }

        ]
    },

    plugins: [
        new MiniCssExtractPlugin({   // css 和 js文件分离
            filename: "index.css",
            chunkFilename: "[id].css"
        })
    ],
}
