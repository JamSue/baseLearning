let a: unknown
let b: string
a = true
// ### 1. 判断 ###
// if(typeof a==='string'){
//     b = a
// }
// ###2.断言###
b = a as string || '' // 写法1
// b = <string>a
console.log(a, b, typeof a, typeof b);
