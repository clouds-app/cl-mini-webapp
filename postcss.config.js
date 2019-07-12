//手机自动适配配置
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
    viewportWidth: 375,   // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
    viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
    unitPrecision: 3,     // 指定`px`转换为视窗单位值的小数位数
    viewportUnit: "vw",   //指定需要转换成的视窗单位，建议使用vw
    selectorBlackList: ['.ignore', '.hairlines'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
    minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    mediaQuery: false     // 允许在媒体查询中转换`px`
    },
    //效果比vm vh适配方案 好
    //详细：https://blog.csdn.net/qq_31393401/article/details/82353267
    //https://www.jianshu.com/p/a145b1c8e6a7
    // 'postcss-pxtorem': {
    //   rootValue: 37.5,
    //   propList: ['*']
    // }
    
  }
}

// module.exports = {
//   "plugins": {
//     // "postcss-import": {},
//     // "postcss-url": {},
//     // "postcss-aspect-ratio-mini": {},
//     // "postcss-write-svg": {
//     //   utf8: false
//     // },
//     "postcss-cssnext": {},
//     "postcss-px-to-viewport": {
//       viewportWidth: 750,   // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
//       viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
//       unitPrecision: 3,     // 指定`px`转换为视窗单位值的小数位数
//       viewportUnit: "vw",   //指定需要转换成的视窗单位，建议使用vw
//       selectorBlackList: ['.ignore', '.hairlines'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
//       minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
//       mediaQuery: false     // 允许在媒体查询中转换`px`
//     },
//     "postcss-viewport-units": {},
//     "cssnano": {
//       preset: "advanced",
//       autoprefixer: false,
//       "postcss-zindex": false
//     }
//   }
// }
