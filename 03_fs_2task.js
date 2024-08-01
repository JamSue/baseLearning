/**
 *  task: 通过fs对象复制文件1.mp4
 */
const fs = require('fs')
const process = require('process') // process的内置函数可以查看程序运行占用内存
// 方法1： 同步读取: 不接收回调函数作为参数
let data = fs.readFileSync('./setting/1.mp4')
console.log(data)
fs.writeFileSync('./setting/IStanU.mp4', data)
console.log(process.memoryUsage()) //54001664

// 异步读取会抛出异常的
// let data1 = fs.readFile('./setting/1.mp4')
// fs.writeFile('./setting/IStanU-01.mp4', data1)

// 方法2： 流式读取
let rs = fs.createReadStream('./setting/1.mp4') // 创建读取流对象
let ws = fs.createWriteStream('./setting/IStanU-02.mp4') // 创建写入流对象

rs.on('data', chunk => {
    // 绑定data事件
    ws.write(chunk) // 流式写入直接write就行啦~~~
})
console.log(process.memoryUsage()) // 45469696

// 流式读取的简便写法: 通过管道从读取流传到写入流
rs.pipe(ws)
/**
 tips：
    读取速度一般会比写入速度要快
    流式读写占用的内存会比同步读取小一些
 */