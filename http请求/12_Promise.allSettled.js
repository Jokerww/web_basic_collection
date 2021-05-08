/* 
Promise.allSettled()也可用于批量处理数据 与promise.all()用法类似
    但是比all更加宽泛 all只有当所有的promise都成功才返回结果
    allSettled会在任何时候都返回结果 无论传入的promise成功与否 
    如果接受的结果中有失败的情况 完全可以用filter()给过滤掉
*/

const promise1 = new Promise((resolve,reject)=>{
    reject('失败1111')
});
const promise2 = new Promise((resolve,reject)=>{
    resolve('成功222')
    // reject('失败2222')
});
const promise3 = new Promise((resolve,reject)=>{
    resolve('成功333')
    // reject('失败2222')
});
// 返回所有的结果
Promise.allSettled([promise1,promise2,promise3]) //处理多个独立的promise时 需要将其放入列表中传入
.then(val=>{ //val是一个对象 里面有每一个promise的状态 值/理由
    console.log(val)})

//只返回成功的=结果
Promise.allSettled([promise1,promise2,promise3]) //处理多个独立的promise时 需要将其放入列表中传入
.then(val=>{ //val是一个可迭代对象 里面有每一个promise的状态 值/理由
    let users = val.filter(item => item.status === 'fulfilled')
    console.log(users)})