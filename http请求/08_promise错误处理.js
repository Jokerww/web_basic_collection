/* 
利用then 进行处理的时候 通常会传递一个处理resolve的函数和处理reject的函数
Promise主体中产生的错误 大多都会传递到then函数中reject处理函数进行处理 
但是当链式then时 每次都处理错误可能没有必要
此时就可以利用catch函数来集中处理前边所有的错误 
当然如果前边的某一个错误在某一个then中处理过 则该错误不会再传递到catch中了 
*/

new Promise((resolve,reject)=>{
    // resolve('成功了')
    // reject('错误')
    // reject(new Error('错误1')) //用err.message
    throw new Error('错误2')//用err.message
    // h+1;
}).then(
    val1=>{
        console.log(val1);
    }
).catch(err=>console.log(err.message))