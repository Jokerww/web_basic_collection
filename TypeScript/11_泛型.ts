/* 
在定义类或者函数时，如果类型不明确就可以使用泛型 

*/
// <>传入类类型形参 可自动解析 不能自动解析时需要自己指定
function Fx<T> (data:T):T{
    return data
}
let data1 = Fx(()=>{}) //不指定T的具体值 ts会自动推断
let data2 = Fx<number>(10) //指定泛型的类型 减少错误 相当于把number赋值给了T

console.log(typeof data1)
console.log(typeof data2)

// 泛型可以不只用一个 可以有多个
function func2<T,U>(a:T,b:U):T{
    console.log(b);
    return a
}
let res11 = func2<number,string>(2,'你好呀')//返回值为number
console.log(typeof res11); 

// 泛型也可以继承自接口 继承接口的属性 也可以自己再添加属性
interface myInter1{
    length:number
    // name:string
}
// 此时的T必须是myInter1的实现类 也可以有自己的类型
function func3<T extends myInter1>(a:T):number{
    return a.length
}
// 此时的T制定了length属性 类型为number 而a的类型是T 所以a必须有length属性 相当于a是T的具体实现 字符串 数组都可以 
let res22=func3<{length:number}>('12322') //字符串有length属性 所以没有报错
let res33=func3<{length:number,name:string}>({length:3,name:'小明'}) //类似于类型约束的用法
console.log(res33,res22);

// 也可以给类使用泛型
class Cls11<T>{
    name:T
    constructor(name:T){
        this.name = name
    }
}
let cls11 = new Cls11<string>('小红')
console.log(cls11.name);

// 一种常见的用法是 一个函数 如果传入数值参数就返回数值类型的值 传入字符串参数就返回字符串类型值 传入数值数组就返回数值数组值
// 这种需求很常见 但如果按照普通的类型注解并不能实现 函数定义多次会被覆盖 这个 就需要泛型了 
function reverse<T>(items:T[]):T[]{
    const toreturn = [];
    for (let i=items.length-1;i>=0;i--){
        toreturn.push(items[i]);
    }
    return toreturn;
}
console.log(reverse([2,3,4,5,6]))
console.log(reverse(['a','b','c','d']))

