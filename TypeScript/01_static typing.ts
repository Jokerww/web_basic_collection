// 定义了静态类型的变量之后，变量的类型是不可改变的
let count:number = 2
count = 3 //只能为其赋值number类型
count.toFixed(2) //count变量直接继承了number类型的内置属性和方法
console.log(3)

let str:string = '123456'
let str1:string = str.substring(1,3)
console.log(str1)