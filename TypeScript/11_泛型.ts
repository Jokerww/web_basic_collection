// <>传入类类型形参 可自动解析 不能自动解析时需要自己指定
function Fx<T> (data:T):T{
    return data
}
let data1 = Fx(()=>{})

console.log(typeof data1)

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

