module.exports = {
  presets: [
    '@vue/app'
  ]
}

// module.exports = {
//   presets: ['@vue/app'],
//   plugins: [
//     [
//       'import',
//       {
//         libraryName: 'vant',
//         libraryDirectory: 'es',
//         style: name => `${name}/style/less`
//       },
//       'vant'
//     ]
//   ]
// };

// // 在 babel.config.js 中配置按需引入样式源文件
// // 注意：babel6 不支持按需引入样式，请手动引入
// module.exports = {
//   plugins: [
//     [
//       'import',
//       {
//         libraryName: 'vant',
//         libraryDirectory: 'es',
//         // 指定样式路径
//         style: name => `${name}/style/less`
//       },
//       'vant'
//     ]
//   ]
// };