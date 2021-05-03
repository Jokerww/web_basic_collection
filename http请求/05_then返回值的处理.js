/* 
then的处理对象：后面的then永远是对前面返回值的处理

    1，如果前面的then没有返回值 则默认是对前面then这个Promise的处理
    2，如果前面的then有返回值 return了什么东西 后面的then就是对前面返回值的处理
       若返回的是参数 则后面的then接受参数并进行处理（通常是成功的处理）
       若返回的是promise 则后面的then便处理这个promise 
       就算返回的promise后面接了then  那仍然是对返回值中最后得到的promise的处理 then本身也是promise

*/

/*
 //1,前面的then没有返回值 
new Promise((resolve,reject)=>{
    resolve('成功1')
}).then(
    msg1=>console.log(msg1),
    err1=>console.log(err1)
).then(
    msg11=>console.log('成功了11'), //前面then处理了promise 状态为成功 
    err11=>console.log('失败了11')
)
 */

/* 
//2,前面的then返回一个参数
new Promise((resolve,reject)=>{
    resolve('成功1')
}).then(
    msg1=>{
        console.log(msg1)
        return '成功了2'
    },
    err1=>console.log(err1)
).then(
    msg11=>console.log(msg11), //这个then处理了上一个then的返回值 接受了参数并输出
    err11=>console.log(err11)
) */

//3,前面的then返回的是Promise
/* new Promise((resolve,reject)=>{
    resolve('成功1')
}).then(
    msg1=>{
        console.log(msg1) //处理前面的promise
        return new Promise((resolve,reject)=>{ 

        })
    },
    err1=>console.log(err1)
).then(
    msg11=>console.log(msg11), //处理上一个then的返回值 返回值为pending状态的返回值 并没有发生状态转变 便一直等待
    err11=>console.log(err11)
)  */

/* new Promise((resolve,reject)=>{
    resolve('成功1')
}).then(
    msg1=>{
        console.log(msg1) //处理前面的promise
        return new Promise((resolve,reject)=>{ 
            resolve('成功了222')
        })
    },
    err1=>console.log(err1)
).then(
    msg11=>console.log(msg11), //处理上一个then的返回值 返回值为解决状态的promise 便处理成功的函数
    err11=>console.log(err11)
)  */

new Promise((resolve,reject)=>{
    resolve('成功1')
}).then(
    msg1=>{
        console.log(msg1) //处理前面的promise
        return new Promise((resolve,reject)=>{ 
            resolve('成功了222')
        }).then(null,err=>console.log(err)).then(msg3=>{
            console.log(msg3);//处理前面的promise
            return new Promise((resolve,reject)=>{ //第一个then最后返回了一个resolve状态的Promise 
                resolve('成功了333') 
            })
        })
    },
    err1=>console.log(err1)
).then(
    msg11=>console.log(msg11), //处理上一个then的返回值 返回值为解决状态的promise 便处理成功的函数
    err11=>console.log(err11)
) 