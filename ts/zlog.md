## TypeScript学习记录
 
 ts官网 ： https://www.typescriptlang.org/docs/handbook/

#### 一.前情提要
 <strong>js的缺陷</strong>
- 数据类型模糊  
- 逻辑缺陷无法识别 
- 低级的拼写错误也无法识别

 <strong>ts相应的改善</strong>
 - 定义数据时指定类型
 - 静态类型检查：在允许代码前，发现代码不合理处，减少运行时异常的出现
 
 <b>ts的优缺点：</b>结构清晰，便于后期代码维护，但是相同功能，ts的代码量会比js大。

 #### 二.预编译
 > ts的代码在被渲染之前都需要先编译成js, react、vue框架中带的脚手架自带ts编译-->webpack或者vite
 1. 命令行编译
    (1) 全局安装TypeScript: `npm - typescript -g`
    (2)`tsc ts文件.ts`就会生成相应的js文件

 2. 自动化编译
   （1）`tsc --init` 创建编译控制文件，生成`tsconfig.json`配置文件，包含编译时的配置
   （2）`tsc --watch` 监视项目中.ts文件的变化
   （3）优化：`tsc --noEmitOnError --watch` 当编译出错时不生成ts文件，也可直接调整配置文件

#### 三.TS的类型声明
1. 显示声明数据类型
   > `let a : number` 声明后a只能赋值为number类型
   >当数据没有指定类型时，数据默认为`any`
   >字面量类型的声明，`let a: 'hello'`, a就只能为字符串'hello'
2. string 与 String, number和Number， boolean和Boolean都有区别
   >以string/String为例子
   >string是基元，String是包装类型，不能将String赋值给一个string定义后的变量
   > String的用法： a = new String() =>几乎不用，看似更灵活，但是占用更多的内存也没必要使用。
   > 主要用于底层的**自动装箱**，将原始类型包装成对象以便调用方法或属性，例如：a.length，a.UpperCase()

3. 类型推断 : `let c = 'jamsue'`  c就被推断为string类型, 但是最好不要这样用
   
##### TS的常用类型
1. **any**： 一旦类型被限制为`any`,意味着放弃了对该变量进行类型检查。<font color='red'>any类型的变量可以被赋值给任意类型的变量</font>
   ```
    let an: any
    an = false
    let str = 'hello'
    str = an
    console.log(an, str) // false, false
   ```
2. **unknown**: 表示数据类型未知，可以给unknown类型赋值任意类型，但是不能将未知类型赋值给确定非unknown类型。严谨可以通过**类型判断或者断言**将未知类型再赋值给确定类型
   > 
   ```typescript
    let a: unknown
    let b: string
    a = false
    // ### 1. 判断 ###
    if(typeof a==='string'){
        b = a
    }
    // ###2.断言###
    b = a as string // 写法1
    b = <string> a
    console.log(a, b, typeof a, typeof b); // false false boolean boolean
    // 能赋值但是类型并没有被断言更改
   ```
   > 
   <font color='red'>不太理解这边断言的原理，为什么打印出来的预定义为string的b最后类型还是boolean</font>
3. **never**：不能用never来声明变量，主要用于控制函数返回值，函数不能有返回值，js语法下函数会默认返回undefined,但是**不能对这个返回值进行赋值或其他操作，可以打印..打印出undefined**
4. **void**：也是主要用来声明函数返回值，返回的是undefined,但是可以操作

5. **object和Object**，两者的涵盖范围较大。用`object`声明的变量，可用来赋值给**除基础数据类型**的数据。而`Object`范围更大，用来表示除`undefined`和`null`的值(所有可以调用到Object的值)
	

 - **对象定义方法**
 	
tips: `可选链形式`以及`索引签名`, `索引签名`让对象在声明时先占个坑位，表示允许对象中定义更多其他属性
```typescript
// 声明方式：属性之间可以用';'分隔，也可以用','分隔
//          当属性各占一行的时候也可以不用分隔符
//          一个对象名只能声明一次但是可以多次赋值
let student1 : {
    id: string;
    name: string;
    age?: number // 可选链形式，表示定义的student，可以有age属性也可以没有。但是上面两者必须要有
}
let student2 : {
    id: string,
    name: string,
    age?: number 
}

//对象的赋值，属性之间必须用','分开
student = {
	id: '00001',
	name: 'no_name'
}

// 索引签名
let student3 : {
    id: string
    name: string
    age?: number 
    [key:string]:any // 指定属性名的类型和属性值的类型就行
}
student3 = {
    id: '00002',
    name: 'no_name2',
    gender: '男', // 可以多次定义未知的属性
    grade: '3'
}
```

 - **函数指定类型**
 
在声明函数之前指定函数的参数类型和返回值类型，可减少类型推断带来的不确定性
```typescript
let countSum: (x:number, y:number) => number
countSum = function (x,y){
	return x+y
}
```
我感觉常用的函数定义方式还是下面这种。但是这两的区别可能主要还是上面的方式能够实现复用，这块还没有实际体会过~~
```typescript
function countSum(x:number, y:number):number {
    return x+y
}
```
- **数组声明方式**

```typescript
let arr = [] // 这个是赋值,包含了声明+赋值，ts进行类型推断
let arr1: string[]
let arr2: Array<string> // 泛型
```

**6.tuple**
`元组`，特殊的数组，在声明中可以指定元素的类型。

```typescript
let arr: [string] // 指定只有一个字符串的数组
let arr1:[string, number] // 第一个元素必须是string,第二个元素必须是number
let arr2:[string, number?]// 第一个元素必须是string,第二个元素可选为空或者number
let arr2: [string, ...number[] ] // 第一个元素必须是string,后面接任意数量的数字
```

**7.enum**
`枚举类型`,对声明为枚举类型的变量，会对其中的属性进行`反向映射`, 一般枚举类型的变量首字母大写。
(待补充：自增、字符串枚举、常量枚举)

```typescript
enum Direction = {
	Up,
	Down,
	Left,
	Right
}
// 反向映射后Direction中的每个值都具有键值对形式
Direction = {
	Up: 0,
	Down: 1,
	Left: 2,
	Right: 3,
	0: 'Up',
	1: 'Down',
	2: 'Left',
	3: 'Right'
}
```