/**
 * 创建http服务
 */
const http = require('http') // 引入http模块

// 创建服务，该api接收一个函数作为参数
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8') // 增加响应头字段，可支持中文
    response.end('你好') // 设置响应体内容并结束服务
})

// 监听服务，传入参数为端口号和一个回调函数，回调函数在服务启动时执行
server.listen(8888, () => {
    console.log('服务已启动....')
})