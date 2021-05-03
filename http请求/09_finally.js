/* 
promise的后续处理除了 then catch之外还有finally
finally函数不管promise的状态时成功或者失败 都会执行的函数 可用于加载一些需要请求但无论成功与否的东西
*/

new Promise((resolve,reject)=>{
    // resolve('成功')
    reject('失败')
}).then(msg=>console.log(msg))
.catch(err=>console.log(err))
.finally(()=>console.log('我执行了'))