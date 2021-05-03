/* 
上一个then的返回值 如果返回的是一个对象 用{}括起来 也会将其封装成Promise
    1，普通对象则会接受普通对象为参数
    2，返回then函数对象  则会将其封装成promise并交给后面的then处理
    3,返回类的实例 但其里边有then函数 同2
    4，返回静态then函数 同2
*/

/* //1，返回普通对象
new Promise((resolve,reject)=>{
    resolve('成功1')
}).then(
    msg1=>{
        console.log(msg1);
        return {
            name:'小明',
            age:18
        }
    },
    err1=>console.log(err1)
).then(
    msg2=>console.log(msg2), //接受普通的对象为参数进行处理
    err2=>console.log(err2)
) */

/* //2,返回then函数
new Promise((resolve,reject)=>{
    resolve('成功1')
}).then(
    msg1=>{
        console.log(msg1);
        return {
            then(resolve,reject){
                resolve('成功了2')
            }
        }
    },
    err1=>console.log(err1)
).then(
    msg2=>console.log(msg2), //上一个then返回的函数对象被封装成Promise 并接受其resolve状态
    err2=>console.log(err2)
) */

/* //3,返回对象实例
new Promise((resolve,reject)=>{
    resolve('成功1')
}).then(
    msg1=>{
        console.log(msg1);
        class Hd{
            then(resolve,reject){
                // setTimeout(()=>{
                //     resolve('成功了2') //延迟2s后执行注册微任务
                // },2000)
                resolve('成功了2') 
            }
        }
        return new Hd() //返回了对象的实例 
    },
    err1=>console.log(err1)
).then(
    msg2=>console.log(msg2), //上一个then返回的函数对象被封装成Promise 并接受其resolve状态
    err2=>console.log(err2)
) */

//4，返回静态方法
new Promise((resolve,reject)=>{
    resolve('成功1')
}).then(
    msg1=>{
        console.log(msg1);
        return class Hd1{
            static then(resolve,reject){
                resolve('成功了2') 
            }
        } 
    },
    err1=>console.log(err1)
).then(
    msg2=>console.log(msg2), //上一个then返回的函数对象被封装成Promise 并接受其resolve状态
    err2=>console.log(err2)
) 