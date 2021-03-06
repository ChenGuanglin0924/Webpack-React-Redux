const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');  //css单独打包
const HtmlWebpackPlugin = require('html-webpack-plugin');  //生成html
const OpenBrowserPlugin = require('open-browser-webpack-plugin');  //打开浏览器
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');  //压缩js的插件

const APPINFO = require('./package.json');  //项目的描述文件

//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
const BUILD_ENTRY = path.resolve(__dirname, './src/App.jsx');  //打包入口
const BUILD_PATH = path.resolve(__dirname, './dist');  //打包出口
const BUILD_INDEX = '[name].bundle.js';  //打包文件名
const EXCLUDE_PATH = path.resolve(__dirname, './node_modules');  //编译排除路径
const SRC_PATH = path.resolve(__dirname, './src');  //src路径
const STATIC_PATH = path.resolve(__dirname, './static');  //静态文件
const CSS_PATH = path.resolve(__dirname, './css');  //CSS路径

module.exports = {
    mode: 'development',
    entry: {
        app: BUILD_ENTRY,  //入口文件
    },
    //输出目录
    output: {
        path: BUILD_PATH,  //打包后的js文件存放的地方
        filename: BUILD_INDEX,  //打包后的js文件名
        publicPath: "./", //编译好的文件，在服务器的路径,域名会自动添加到前面
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            include: SRC_PATH,
            exclude: EXCLUDE_PATH,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ["react", "env"]
                }
            }]
        },
        {
            test: /\.(gif|jpg|jpeg|png|svg)$/,
            include: STATIC_PATH,
            exclude: EXCLUDE_PATH,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: '[name].[ext]',
                    outputPath: 'images'
                }
            }]
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            include: CSS_PATH,
            exclude: EXCLUDE_PATH,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts'
                }
            }]
        },
        {
            test: /\.css$/,
            use: [{
                fallback: "style-loader",
                loader: 'css-loader',
                options: {
                    minimize : true //css压缩
                }
            }]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                VERSION: `"${APPINFO.version}"`,
                NAME: `"${APPINFO.name}"`,
                NODE_ENV: JSON.stringify('production') //定义生产环境
            }
        }),
        new ExtractTextPlugin('app.bundle.css'),
        new OpenBrowserPlugin({ url: 'http://127.0.0.1:8000/index.html' }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css'] //后缀名自动补全
    }
};