// <>传入类类型形参 可自动解析 不能自动解析时需要自己指定
function Fx<T> (data:T):T{
    return data
}
let data1 = Fx(()=>{})

console.log(typeof data1)