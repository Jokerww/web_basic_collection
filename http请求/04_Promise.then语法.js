/* 
Promise.then中 promise中的函数是装备状态 准备干的活
then中是干完活之后的处理函数 
promise中状态转变之后 resolve/reject发出通知后 改通知参数会向后传递给then中的参数的处理函数
若前一个then 没有对该参数进行处理 则会一直向后传递 为啥呢？
因为 Promise.then本身也是一个Promise 后面的then 是对前面promise的处理 就有了链式的.then


*/

/* new Promise((resolve, reject) => {
   resolve("一瓶可乐");
   //reject('没买到可乐');
})
  .then(null,err1=>console.log(err1)) //这里只处理了错误 没有处理成功 
  .then(
    (msg2) => console.log(msg2),//这里会处理成功函数 接受参数
    (err2) => console.log(err2)
  );
 */
let p1 = new Promise((resolve, reject) => {
 //resolve("成功1");
 reject('失败')
});

let p2 = p1
  .then(
    (value) => {
        console.log("成功2")
    },
    (err) => console.log("失败2")
  )
  .then( 
    (a) => console.log('成功3'),
    (e) => console.log('失败3') 
    //就算p1是失败状态 但是第一个then成功处理p1的结果 因此第一个then是成功完成的 因此第一个then的promise状态是成功
    //所以紧接着第一个then的第二个then 处理第一个then这个promise 得到的便是成功状态 进行成功的处理 除非第一个then对p1没处理则状态向后传递
    //第二个then才处理错误函数 
  );

// console.log(p1); //状态转变为成功状态 resolve已经发出通知
// console.log(p2); //准备状态 状态还没被扭转

setTimeout(()=>{
    console.log(p1);
    console.log(p2); //此时的promise状态已经转变 因为setTimeout是一个宏任务
},1000)
