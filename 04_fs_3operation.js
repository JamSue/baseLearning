/* 
文件的重命名，移除
文件夹的创建，递归创建，读取，删除，递归删除
*/
const fs = require('fs')

// 1.重命名 rename 和 renameSync
// fs.rename('./setting/1.mp4', './setting/IU.mp4', err => {
//     if (err) {
//         console.log('重命名失败')
//         return
//     }
//     console.log('重命名成功')
// })

// 2.移动 -->重命名的路径更换即可
// fs.rename('./setting/IStanU.mp4', './IStanU.mp4', err => {
//     if (err) {
//         console.log('移动失败')
//         return
//     }
//     console.log('移动成功')
// })

// 3.删除 unlink和rm有对应的Sync方法
    //(1) unlink
// fs.unlink('./IStanU.mp4', err => {
//     if (err) {
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })
    //（2）rm方法
// fs.rm('./IStanU.mp4',err => {
//     if (err) {
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })

// 3.文件夹操作
/* fs.mkdir('./dir', err => {
    // 创建文件夹， 如果存在该文件夹则创建不会成功
    if (err) {
        console.log('创建失败')
        return
    }
    console.log('创建成功')
})

fs.mkdir('./dir1/1/2', { recursive: true }, err => {
    // 递归创建文件夹，添加上参数 { recursive: true }
     if (err) {
        console.log('递归创建失败')
        return
    }
    console.log('递归创建成功')
}) */

// ####读取文件夹####

/* fs.readdir('./', (err, data) => {
    // 读取当前文件夹
    if (err) {
        console.log('读取失败')
        return
    }
    console.log('文件夹下的数据：', data)
}) */

// #### 删除文件 ####

/* fs.rmdir('./dir', error => {
     if (error) {
        console.log('删除失败')
        return
    }
    console.log('删除成功')
}) */

/* fs.rmdir('./dir1', { recursive: true }, error => {
    // 递归删除
     if (error) {
        console.log('删除失败')
        return
    }
    console.log('删除成功')
}) */

    // #### 推荐使用 #### 
/* fs.rm('./dir', { recursive: true }, err => {
     if (err) {
        console.log('删除失败', err)
        return
    }
    console.log('删除成功')
}) */


// #### 查看文件状态 ####
/* 包括文件的
    大小：size
    创建时间： birthtime
    最后一次访问时间：  atime
    最后一次修改时间：  mtime
    最后一次修改文件状态时间： ctime
     */
fs.stat('./setting/IU.mp4', (err, data) => {
     if (err) {
        console.log('操作失败', err)
        return
    }
    console.log('data', data)
    console.log(data.isFile())
    console.log(data.isDirectory())
})

