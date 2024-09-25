const fs = require('fs')

fs.mkdir('./file', err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('创建成功')
})
// 创建0-10的文件
for (let i = 1; i <= 10; i++) {
    fs.writeFile(`./files/${i}-test.txt`, 'testing', err => {
        if (err) {
            console.log('创建失败', err)
            return
        }
        console.log('创建成功')
    })
}
let i = 11
fs.writeFileSync(`./files/${i}-test.txt`, 'testing', err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('创建成功')
})

// 将小于10的文件数字前加上0
fs.readdir('./files', (err, data) => {
    if (err) console.log('读取失败')
    else {
        console.log(data)
        data.forEach(item => {
            oldFileName = `./files/${item}`
            console.log(oldFileName)
            console.log(item)
            let [num, fname] = item.split('-')
            if (num.length<2) {
                num = '0' + num
            }
            newFileName = `./files/${num}-${fname}`
            fs.rename(oldFileName, newFileName, err => {
                if (err) {
                    console.log('重命名失败', err)
                    return
                }
                console.log("重命名成功")
            })
        })
    }
})
