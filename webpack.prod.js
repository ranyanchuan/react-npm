const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: "production",
    entry: __dirname + "/src/app.js",//已多次提及的唯一入口文件
    externals: ['react', 'react-dom', 'prop-types'],
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "index.js",//打包后输出文件的文件名
        libraryTarget: 'commonjs2'
    },

});
