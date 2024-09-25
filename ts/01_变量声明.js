"use strict";
let a;
let b;
a = true;
// ### 1. 判断 ###
// if(typeof a==='string'){
//     b = a
// }
// ###2.断言###
b = a || ''; // 写法1
// b = <string>a
console.log(a, b, typeof a, typeof b);
