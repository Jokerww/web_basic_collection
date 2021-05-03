/*  重要！！！
let promise = new Promise(resolve=>{ //可以只给参数函数一个成功的参数 让其执行成功的处理函数
    setTimeout(()=>{ //promise里边的宏任务 但是是异步任务 同步任务之后执行
        console.log("setTimeout");
    },0)
    resolve() //同步任务 注册了一个微任务  会比上边的异步任务先执行 
    console.log('promise'); //promise参数函数里的同步任务 最先执行
}).then(value=>console.log('成功')) //微任务
console.log('啊'); //同步任务2 第二个执行
 */


let promise2 = new Promise(resolve=>{ //可以只给参数函数一个成功的参数 让其执行成功的处理函数
    setTimeout(()=>{ //promise里边的宏任务 但是是异步任务 同步任务之后执行
        resolve() //异步任务里注册了一个微任务 会在下次轮询时执行 
        console.log("setTimeout2"); //比上边的微任务先执行
    },0)
    console.log('promise2'); //promise参数函数里的同步任务 最先执行
}).then(value=>console.log('成功2')) //微任务
console.log('啊2'); //同步任务2 第二个执行