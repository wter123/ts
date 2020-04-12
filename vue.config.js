const webpack = require("webpack");

module.exports = {

    configureWebpack: {

        plugins: [

            new webpack.ProvidePlugin({

                $: 'jquery',

                jQuery: 'jquery',

                'window.jQuery': 'jquery',

                Popper: ['popper.js', 'default']

            })

        ]

    }, // 基本路径
    publicPath: "./",
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
        open: true, //自动启动浏览器
        proxy: {
            '/api': { //这里最好有一个 /
                target: 'http://127.0.0.1:5000/api', // 后台接口域名
                ws: true, //如果要代理 websockets，配置这个参数
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //只有/api开头可以使用代理
                }
            }
        }
    },
    productionSourceMap: false
}