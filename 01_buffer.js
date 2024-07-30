let buf1 = Buffer.alloc(10) // 分配10个字节的缓存，分配时会清空内存中原有的数据

let buf2 = Buffer.allocUnsafe(100) // 创建大小为100字节的缓存，分配时不会清空内存中原有的数据

let buf3 = Buffer.from('hell0') // 通过将参数转换成Unicode编码（兼容ASCII码表）

// 通过以上方式创建的Buffer，打印出来以16进制格式展示