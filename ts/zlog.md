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
   <font color='red'>不太理解这边断言的原理，为什么打印触雷的预定义为string的b最后类型还是boolean</font>
3. **never**：不能用never来声明变量，主要用于控制函数返回值，函数不能有返回值，js语法下函数会默认返回undefined,但是**不能对这个返回值进行赋值或其他操作，可以打印..打印出undefined**
4. **void**：也是主要用来声明函数返回值，返回的是undefined,但是可以操作
  