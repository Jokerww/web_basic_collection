/* 
aysnc的错误处理通常 在async修饰的函数外面用 catch捕获并处理错误
await的错误处理通常 在async修饰的函数内部用 try...catch...标准语法来解决错误
*/

//1,async错误处理

/* async function err1(){
    // console.log(a); //未定义的变量a 调用函数会报错
    throw new Error('错误')

}
err1().catch(err=>console.log(err.message)) */

//2 await 错误处理
async function err2(){
    try { //利用try catch 处理了错误 便可顺利的输出下面的333
        let user = await Promise.reject('错误1') //当发生错误时 如果不处理 代码会立刻停止 不会向下执行
        let lesson = await Promise.resolve('lesson') 
        return lesson
    } catch (error) {
        console.log(error);
    }
    return 333
}
err2().then(v=>console.log(v))