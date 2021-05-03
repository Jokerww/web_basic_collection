/* async和await是Promise的语法糖
    被aysnc修饰的函数会被封装成一个Promise
    await的作用相当于then 可以直接获取对promise处理的结果
    await必须在async修饰的函数中使用 否则会报错
    在await后面发送请求 然后可以立即接收

*/

async function hd(){
    let val1 = await Promise.resolve('成功'); //加了两行代码 就变成了pending状态
    console.log(val1);
    return 'aha'
}
console.log(hd());//输出Promise 且默认是完成状态的Promise


// 例子 延迟输出
async function sleep(delay){
    return new Promise((resolve,reject)=>{
        setTimeout(_=>{
            resolve()
        },delay)
    })
}
async function show(arr){
    for (const item of arr) {
        await sleep(2000) //等待两秒
        console.log(item);
    }
}
show([1,2,3,4,5])