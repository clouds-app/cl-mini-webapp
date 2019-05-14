const glob = require('glob')

console.log('获取页面文件中...')
const files = glob.sync('**/views/**/main.js')
console.log('文件原始路径：'+files)
const pages = {}
files.forEach(item => {
  const items = item.split('/')
  console.log('文件路径split by /:'+items)

  let page = items[items.length - 2]
  console.log('文件路径截取 by items.length :'+items.length)
  
  const pageParent = items[items.length - 3]

  console.log('文件路径 pageParent Name:'+pageParent)

  console.log('-----page Name----------'+page)
  if (pageParent === 'frame') {
    page = `${page}Frame`
  }
  pages[page] = item
})
console.log('文件获取结束')

module.exports = pages