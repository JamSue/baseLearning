/* 
    __dirname: 表示当前文件的绝对路径
    __filename:表示当前文件夹的绝对路径
    注意：两者打印出来都是 '\'
*/
const path = require('path') // 导入path模块
console.log('__dirname', __dirname)
console.log('__filename', __filename)

const PATH = __dirname + '/index.js'
console.log(PATH)
//  resolove:用于将路径或者路径段解析为正确的绝对路径
console.log(path.resolve(PATH))

// sep: 返回当前系统的分隔符
// window系统分隔符为‘\’ Linux系统分隔符为‘/’
console.log(path.sep)

// parse: 解析路径，获取路径的相关信息
console.log(path.parse(path.resolve(PATH)))

console.log('basename:', path.basename(path.resolve(PATH)))
console.log('dirname:', path.dirname(path.resolve(PATH)))
console.log('extname:', path.extname(path.resolve(PATH)))