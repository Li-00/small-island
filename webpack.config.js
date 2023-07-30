const path = require("path")
const resolve = dir => path.join(__dirname,dir)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    //入口
    entry:'./src/main.js',
    //输出口
    output:{
        path:path.resolve(__dirname,'dist'),  //绝对路径
        filename:'main.js',
    },
    resolve: {
        alias: {
            "@":resolve('src'),
            "@assets":resolve('src/assets'),
            "@views":resolve('src/views'),
            "@plugins":resolve('src/plugins'),
            "@store": resolve("src/store"),
            "@utils": resolve("src/utils"),
            "@static": resolve("src/static"),
            "@components": resolve("src/components"),
            "@router":resolve("src/router"),
            "@apis": resolve("src/config/Apis"),
            "@services": resolve("src/common/services.js"),
            "@config":resolve("src/config") 
        },
        //import文件不需要后缀
        extensions: [".js",".json"]
    },
    //加载器
    module:{
        rules:[
            {
                test:/\.vue$/,
                    loader:'vue-loader'
                
            },
            //loader的配置
            {
                test:/\.css$/,
                use:[
                    'style-loader', 
                    'css-loader'   
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'   
                ]
            },
            {
                test:/\.(png|jpe?g|gif|webp|svg)$/,
                type: "asset",
                parser:{
                    dataUrlCondition:{
                        //小于36kb的图片转base64
                        //优点：减少请求数量 缺点：体积会更大
                        maxSize: 36 * 1024,
                    }
                },
                generator:{
                    //输出图片名称
                    //[hash:10]文件名称只取前十位
                    filename:"static/images/[hash][ext][query]",
                }
            },
            {
                test:/\.(ttf|woff2?|map3|map4|avi)$/,
                type: "asset/resource",
                generator:{
                    filename: "static/media/[hash:10][ext][query]",
                }
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:"babel-loader",
            }
        ]
    },
    //插件
    plugins:[
    new HtmlWebpackPlugin({
        //以下面文件为模板生成文件
        template: path.resolve(__dirname,"./public/index.html")
    }),
    new VueLoaderPlugin()
],
    devServer:{
        host:"localhost", //启动服务器域名
        port: "3000", //启动服务器端口号
        open: true,  //是否自动打开浏览器
    },
    //模式
    mode:'development',
}