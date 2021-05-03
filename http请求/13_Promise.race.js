/* 
Promise.race()的用法和前面的alla allSettled差不多 也是用于批量的处理promise
不同的时 race只返回 反应最快的那个promise的结果
race就是长跑比赛嘛  谁最快就返回谁的结果

*/

/* 应用场景：
    1设置请求超时：根据race只返回最快的promise结果的特性 可以在传入race的promise列表中手动加上一个promise
        new Promise((resolve, reject) => {setTimeout(() => reject("请求超时"), 2000)});加上2s的时间限制
        这个promise在2s后就会返回结果 如果正常请求的promise比他快则可正常使用其数据 
        若比他慢 则会返回请求超时

*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("失败200"), 200);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("成功500"), 500);
  });

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("成功800"), 800);
  });

Promise.race([promise1,promise2,promise3]) //从结果看 无论是成功还是失败 都返回反应最快的那一个
.then(res=>console.log(res))
.catch(err=>console.log(err))

/* 
//封装成函数
function query(url,delay){
    let promises = [
        ajax(url),
        new Promise((resolve, reject) => {setTimeout(() => reject("请求超时"), delay)})
    ];
    return Promise.race(promises)
}
//使用
query(url,delay).then().catch() 
*/