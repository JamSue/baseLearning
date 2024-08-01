/**
 * fs（fileSystem）：
 * 实现与硬盘的交互，文件的创建，删除，重命名，文件内容的写入读取等
 */

const fs = require('fs') // require全局函数，导入fs模块

// 1.文件写入

fs.writeFile('./setting/file.txt', 'This is a sentence', err => {
    // 当文件写入失败，err为一个错误对象 写入成功则为null
    if (err) {
        console.log('写入文件失败')
        return
    }
    console.log('写入文件成功')
})

fs.writeFileSync('./setting/fileSync.txt', 'This is written by sync operation', err => {
    // 同步写入，同步写入完成后再执行后面的代码
    // 更易于理解，但是效率更低
    if (err) {
        console.log('写入文件失败')
        return
    }
    console.log('写入文件成功')
})


// 2.文件追加
fs.appendFile('./setting/file.txt', '\r\nThis sentence is appended: today is a good day!', err => {
    if (err) {
        console.log('追加写入文件失败')
        return
    }
    console.log('追加写入文件成功')
})

fs.appendFile('./setting/file.txt', '\r\nThis sentence is sync appended: know know', err => {
    if (err) {
        console.log('同步追加写入文件失败')
        return
    }
    console.log('同步追加写入文件成功')
})

fs.writeFile('./setting/file.txt', '\r\nhere is GUI', { flag: 'a' }, err => {
    // 通过第三个参数控制写入文件的模式
     if (err) {
        console.log('追加写入文件失败1')
        return
    }
    console.log('追加写入文件成功1')
})


// 3.文件流式写入: 适合大文件写入
const ws = fs.createWriteStream('./setting/streamFile.txt') // 创建写入流对象
ws.write('床前明月光')
ws.write('\r\n疑是地上霜')
ws.write('\r\n举头望明月')
ws.write('\r\n低头思故乡')

ws.close() // 关闭通道，程序结束后也会自动关闭

// 4.文件读取: 以下两种方式是将文件一次性全部读取

fs.readFile('./setting/streamFile.txt', (err, data) => {
    // 异步读取
    if (err) {
        console.log('读取失败')
        return
    }
    console.log(data) // 读取文件内容二进制格式
    console.log(data.toString()) // 读取文件转为字符串
})

let data = fs.readFileSync('./setting/streamFile.txt')
console.log('同步读取\n', data.toString()) // 读取文件转为字符串


// 5.文件流式读取
const rs = fs.createReadStream('./setting/1.MP4') // 创建读取流对象

rs.on('data', chunk => {
    // 绑定data事件，流式读取每一个chunk，每读取应该chunk调用一次回调函数，每个chunk是一个内存块大小<=64KB
    // 因为是视频内容，转字符串会乱码
    // 文件内容-->buffer对象
    console.log(chunk)
    console.log(chunk.length)
})
rs.on('end', () => { // end事件，可选
    console.log('读取完毕')
})