//给数组天界类型注解
//1,单一类型数组
let arr1:number[]=[1,2,3,4]
let arr12:string[] = ['a','b','c','d']

//2,多类型数组
let arr13:(number|string)[]=[1,'a',2]

//3,对象类型数组
//使用类型别名type 定义对象类型 此时的：就是类型注解 而非普通对象的赋值
type Lady = {name:string,age:number}
let arr14:Lady[]=[
    {name:'aaa',age:18},
    {name:'bbb',age:28}
]