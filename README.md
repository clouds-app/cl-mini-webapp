# cl-mini-webapp
http://192.168.168.101:8080/clerp-app-api/swagger-ui.html

http://192.168.168.101:8080/clerp-app-api/user/login

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

我们在vue移动端项目中的适配一般都采用rem，但是rem也不是能兼容所有的终端。
随着viewport单位越来越受到众多浏览器的支持，下面将简单介绍怎么实现vw的兼容问题，用vw代替rem
https://www.cnblogs.com/kdcg/p/9106463.html
postcss-px-to-viewport在vue的使用(vw)
参数配置：
"postcss-px-to-viewport": {
  viewportWidth: 320,
  viewportHeight: 568,
  unitPrecision: 5,
  viewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false
},
默认配置：
,
  "postcss": {
    "plugins": {
        "autoprefixer": {}, 
        "postcss-px-to-viewport": {
            "viewportWidth": 750,
            "minPixelValue": 1
            }
        }
    }
    
 "postcss-px-to-viewport": "^1.1.1",

1.新建页面-》添加文件夹包括文件：.vue,.js,文件夹做为生成HTML文件的名称，不可以大写
2.this.$config.isRunApp 作为是否运行 APP 环境

