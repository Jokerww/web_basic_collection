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

new Promise((resolve,reject)=>{ //准备处理
    resolve('成功')
    // reject('失败')
}).then(value=>{
    console.log('成功的业务处理');
}, //成功的处理方式
    reason=>{
        console.log('拒绝的业务处理');
    }) //失败的处理方式