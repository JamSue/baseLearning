let person = {
    name: 'jamsue',
    age:18
}
console.log(person.name);

let an: any
an = 'hello'

let num: number
num = an
console.log(typeof num);
console.log(num);

// 对象定义方式 -- 索引标签
let student : {
    id: string;
    name: string;
    age?: number // 可选链形式，表示定义的student，可以有age属性也可以没有。但是上面两者必须要有
}
let student1 : {
    id: string,
    name: string,
    age?: number 
}
let student2 : {
    id: string
    name: string
    age?: number 
    [key:string]:any
}
student = {
	id: '00001',
	name: 'no_name'
}
student2 = {
    id: '00002',
    name: 'no_name2',
    gender: '男',
    grade: '3'
}
console.log(student)


// 函数声明类型
// let countSum: (a: number, b: number) => number

// countSum = function (x, y) {
//     return x+y
// }
function countSum(x:number, y:number):number {
    return x+y
}

// 声明数组的方式
let arr = []
let arr1: string[]
let arr2: Array<string>

// 元组
let tup: [string, number]
tup = ['12', 122]

let tup1: [string, boolean?]
tup1 = ['123', false]

let tup2: [boolean, ...number[]]
tup2 = [false, 1, 2]

