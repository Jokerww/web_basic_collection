/* 
Promise.all()可用于批量处理promise 当所有的promise都是成功状态时 输出成功 
    若有失败则只输出第一个失败

可用于批量获取信息 例如：
    通过用户名列表利用map()批量创造 发出ajax请求的promise  
    然后通过promise.all()批量接受用户名对应的用户信息列表
    const promises = [name1,name2,name3].map(item=>ajax(item)) 此处的ajax()是07中的封装promise函数
    const infos = Promise.all(promises).then() 便可批量处理promise 并获得获得信息列表
*/

//基本用法
const promise1 = new Promise((resolve,reject)=>{
    resolve('成功111')
    // reject('失败1111')
});
const promise2 = new Promise((resolve,reject)=>{
    resolve('成功222')
    // reject('失败2222')
});

Promise.all([promise1,promise2]) //处理多个独立的promise时 需要将其放入列表中传入
.then(val=>console.log(val))
.catch(err=>console.log(err))