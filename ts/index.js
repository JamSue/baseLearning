"use strict";
let person = {
    name: 'jamsue',
    age: 18
};
console.log(person.name);
let an;
an = 'hello';
let num;
num = an;
console.log(typeof num);
console.log(num);
// 对象定义方式 -- 索引标签
let student;
let student1;
let student2;
student = {
    id: '00001',
    name: 'no_name'
};
student2 = {
    id: '00002',
    name: 'no_name2',
    gender: '男',
    grade: '3'
};
console.log(student);
// 函数声明类型
// let countSum: (a: number, b: number) => number
// countSum = function (x, y) {
//     return x+y
// }
function countSum(x, y) {
    return x + y;
}
// 声明数组的方式
let arr = [];
let arr1;
let arr2;
// 元组
let tup;
tup = ['12', 122];
let tup1;
tup1 = ['123', false];
let tup2;
tup2 = [false, 1, 2];
