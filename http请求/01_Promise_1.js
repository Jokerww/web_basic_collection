/* Promise的三种状态：
    pending 准备状态
    resolve 成功状态
    reject 失败状态
*/

// console.log(new Promise((resolve,reject)=>{})); 此时的promise处于准备状态

/* 成功状态
console.log( new Promise((resolve,reject)=>{
    resolve('成功了');
}) ); */

/* 失败状态
console.log( new Promise((resolve,reject)=>{
    reject('失败了'); //用catch捕捉失败对象
})); */

/* Promise接受一个函数作为参数 then接受两个函数作为参数 */
new Promise((resolve,reject)=>{ //准备处理 
    console.log('promise1'); //这里是一个同步任务 会比底下的"同步任务2"先输出
    resolve('成功') //成功的通知 发出成功的通知后就会将then中成功的处理函数放到微任务当中 等待执行
    // reject('失败') //失败的通知
}).then(value=>{  
    console.log('成功的业务处理'); //异步任务 会在同步任务全部完成后执行 因为会最后输出
}, //成功的处理方式
    reason=>{
        console.log('拒绝的业务处理');//异步任务
    }) //失败的处理方式

console.log("同步任务2");