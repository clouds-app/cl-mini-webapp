const path = require('path') //使用node.js的内置path模块 //require 中的路径总是相对于包含它的文件，跟你的工作目录没有关系。
const pages = require('./src/libs/pages')
//const pages = require('./src/libs/multi-page')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = dir => path.join(__dirname, dir)//path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。

const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
   pages:pages,
  //调整内部的 webpack 配置。
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
 // webpack配置
 configureWebpack: config => {
  // let plugins =  [
  //     new HtmlWebpackPlugin({  // Also generate a index.html
  //       //entry: 'src/views/index/main.js',
  //       template:'public/index.html',
  //       filename:'index.html',
       
  //    }),// Generates default index.html
  //     new HtmlWebpackPlugin({  // Also generate a index.html
  //       //entry: 'src/views/order/main.js',
  //       template:'public/index.html',
  //       filename:'html/order1.html',
       
  //    })
  //   ]
  // if (process.env.NODE_ENV === 'production') {
  //   config.plugins = [...config.plugins, ...plugins]
  // }
},
// 是否使用包含运行时编译器的Vue核心的构建
//runtimeCompiler: true,  //原来的 Compiler 
  // 打包时不生成.map文件
productionSourceMap: false,
  // 输出文件目录
outputDir: 'Widget',
// 放置静态资源的地方 (js/css/img/font/...)
 assetsDir: 'static',
  devServer: {
    //port: 9099,
    //proxy:'http://192.168.168.111:8081'  http://shop.szclsoft.com
    proxy: {
      '/api': {
        //target: 'http://192.168.168.111:8081/clerp-shop-admin/api/', //对应自己的接口
        target: 'http://shop.szclsoft.com/api/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  pluginOptions: {
  }
  
}