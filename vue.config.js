const path = require('path') //使用node.js的内置path模块 //require 中的路径总是相对于包含它的文件，跟你的工作目录没有关系。
const pages = require('./src/libs/pages') //默认是使用单页面开发
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = dir => path.join(__dirname, dir)//path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'
module.exports = {
  // 去掉文件名中的 hash
  filenameHashing: false,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: false,

  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 构建多页面应用，页面的配置
 pages:pages,
  //调整内部的 webpack 配置。// 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  chainWebpack: config => {
    //修改 Loader 选项
    //别名配置
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set("@img", resolve("src/assets/images"))
      .set("@css", resolve("src/assets/styles/css"))
      .set("@scss", resolve("src/assets/styles/scss"));
  },
 // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
// 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。
//该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
//  configureWebpack: config => {
//      if (process.env.NODE_ENV === 'production') {
//       // 为生产环境修改配置...
//           // config.plugins.push(
//           //   new CompressionWebpackPlugin({
//           //       asset: '[path].gz[query]',
//           //       algorithm: 'gzip',
//           //       test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
//           //       threshold: 10240,
//           //       minRatio: 0.8
//           //   })
//           // )
//     } else {
//       // 为开发环境修改配置...
//     }
// },



configureWebpack:config=>{
  if (process.env.NODE_ENV === 'production') {
      // return{
      //     plugins: [
      //         new CompressionWebpackPlugin({
      //             algorithm: 'gzip',//默认值
      //             test:/\.js$|\.html$|.\css/, //匹配文件名
      //             threshold: 10240,//对超过10k的数据压缩
      //             deleteOriginalAssets: false //不删除源文件
      //             //配置参数详解
      //             // asset： 目标资源名称。 [file] 会被替换成原始资源。[path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串。默认值是 "[path].gz[query]"。
      //             // algorithm： 可以是 function(buf, callback) 或者字符串。对于字符串来说依照 zlib 的算法(或者 zopfli 的算法)。默认值是 "gzip"。
      //             // test： 所有匹配该正则的资源都会被处理。默认值是全部资源。
      //             // threshold： 只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
      //             // minRatio： 只有压缩率小于这个值的资源才会被处理。默认值是 0.8。
      //         })
      //     ]
      // }
  }
},

// 是否使用包含运行时编译器的Vue核心的构建
runtimeCompiler: true,  //原来的 Compiler 
  // 打包时不生成.map文件
productionSourceMap: false,
 // css相关配置
 css: {
  // 是否使用css分离插件 ExtractTextPlugin
  extract: true,
  // 开启 CSS source maps?
  sourceMap: false,
  // css预设器配置项
  loaderOptions: {
    // pass options to less-loader
    // less: {
    //   // 引入全局变量样式
    //   data: `
    //     @import "@/assets/style/var.less
    //   `
    // }
    // less: {
    //   modifyVars: {
    //     //red: '#03a9f4',
    //     blue: '#3296fa',
       
    //   }
    // }
  },
  // 启用 CSS modules for all css / pre-processor files.
  modules: false,
},
  // 输出文件目录
outputDir: 'Widget',
// 放置静态资源的地方 (js/css/img/font/...)
 assetsDir: 'static',
  devServer: {
    //before: app => {}
    //https: true,
    //hotOnly: false,
    //host: 'localhost',
    //port: 9099,//固定端口
    //open: true, // 自动开启浏览器
    compress: false, // 开启压缩
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        //target: 'http://192.168.168.111:8081/clerp-shop-admin/api/', //对应自己的接口
        target: 'http://192.168.168.101:8080/clerp-app-api/', //对应自己的接口
        changeOrigin: true,//是否跨域
        ws: true,
        pathRewrite: {
          '^/api': '' //这里理解成/api 代替 target 里面的地址，后面组件中我们调用接口时，直接使用 api 代替
        }
      }
    }
  },
// // 是否为 Babel 或 TypeScript 使用 thread-loader
 parallel: require('os').cpus().length > 1,
// // 向 PWA 插件传递选项
// pwa: {},
  // 可以用来传递任何第三方插件选项
  pluginOptions: {
  }
  
}