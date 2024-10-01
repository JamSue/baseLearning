let a:unknown
a = 12
a = 'hello'
a = false

console.log(typeof a);

let b: boolean
// b = a as boolean
b = <boolean>a

let boo 

let un: void
// un = null
// un = ''
un = undefined
