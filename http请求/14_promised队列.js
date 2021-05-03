/* Promise队列的基本原理就是一个一个有序的输出
    前一个promise处理输出后 后一个promise才梳理输出 
    则then将会在处理完前一个promise后返回后一个promise

    1，用 map()实现一个队列
    2，用reduce()实现一个队列

*/
/* 
//基本形式
Promise.resolve()
.then(res1=>{
    return new Promise((resolve,reject)=>{
        console.log('1');
        setTimeout(_=>resolve(),1000)
    })
})
.then(res1=>{
    return new Promise((resolve,reject)=>{
        console.log('2');
        setTimeout(_=>resolve(),1000)
    })
})
.then(res1=>{
    return new Promise((resolve,reject)=>{
        console.log('3');
        setTimeout(_=>resolve(),1000)
    })
})
.then(res1=>{
    return new Promise((resolve,reject)=>{
        console.log('4');
        setTimeout(_=>resolve(),1000)
    })
})
 */


// 用map()来封装
function queueMap(arr){
    let promise1 = Promise.resolve();//这个要改变呀 每一次都变成上一次的.then 接受新的promise
    arr.map(item=>{
        promise1 = promise1.then(()=>{ //map每次要手动去改变promise1这个初始值的值
            return new Promise((resolve,reject)=>{
                // 在此处做其他的列表相关的操作
                setTimeout(_=>{
                    console.log(item);
                    resolve()},1000)
            })
        })
    })
}
//  queueMap([1,2,3,4,5])

//用 reduce来封装
function queueReduce(arr){
    //reduce可以设置初始值 就不同代替了 return的也是用来代替pro的
    arr.reduce((pro,item)=>{
        return pro.then(()=>{
            return new Promise(resolve=>{
                //在此处做其他的列表相关的操作
                setTimeout(_=>{
                    console.log(item);
                    resolve()
                },1000)
            })
        })
    },Promise.resolve())
}

queueReduce([1,2,3,4,5,6])