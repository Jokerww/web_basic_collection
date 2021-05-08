/* async和await是Promise的语法糖
    被aysnc修饰的函数会被封装成一个Promise 可以利用then()函数来获取他的值
    await的作用相当于then 可以直接获取对promise处理的结果 成功的结果
    若await的promise失败了 必须要通过try...catch...来进行处理
    await必须在async修饰的函数中使用 否则会报错
    在await后面发送请求 然后可以立即接收

    async修饰的函数的返回值会包装成promise
        将普通的字符串 对象等返回 局势一个包含对应值的promise 状态为resolevd
        如果返回的是错误 则状态为 rejected
        如果返回的是promise 则状态为返回promise的状态 值为改promise通知的值
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
            resolve() //等待delay时间后改变promise的状态 并注册微任务
        },delay)
    })
}
async function show(arr){
    for (const item of arr) {
        await sleep(2000) //等待2s await会在promise改变状态之后 才能去处理这个promise
        console.log(item);
    }
}
show([1,2,3,4,5])