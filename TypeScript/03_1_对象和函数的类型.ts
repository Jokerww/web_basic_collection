/* 给对象添加类型注解的时候 最好不要用object 因为object的类型太多了 函数数组都是对象 所以这样根本就没有意义

给普通的对象添加类型注解一般用{}来声明  let objNormal：{prop1：type1,prop2:type2,[propName:string]:any}  这是类型注解 不是接口和别名
    这种方式就只能给objNormal赋值普通的对象 且前面的两个prop必须实现 最后一项表示可以添加任意数量的属性

给普通的函数添加类型注解直接用function也跟上面的object一样没什么大的意义 
    给普通函数添加注解一般用类似于箭头函数的形式指定参数类型和返回值类型 let funcNormal:(prop1:type1,prop2:type2)=>type返回值的类型

*/
let objN:object //以下三种赋值都不会报错 加了注解跟没加似的
objN = {}
objN=function(){}
objN = []

let objNormal:{name:string,age:number,[propName:string]:any} //普通对象的类型注解
objNormal = {name:'xiaoming',age:18,gender:'男'}
// objNormal = function(){} //报错了

let funcNormal:(num1:number,num2:number)=>number
funcNormal = function(n1,n2){ 
    return n1+n2
}

// 这个函数只能指定参数个数 那我要是想不指定参数个数呢 可以利用对象传参
interface funcP{[proName:string]:number} //任意数量的数值参数类型的接口/别名
let funcNormal1:({}:funcP)=>number
funcNormal1=function({n1,n2,n3}){
    return n1+n2+n3
}
