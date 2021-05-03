/* 
Promise的状态是单一的不可撤销的 
一旦从一个状态转变成另一个状态就无法逆转了 
处理结果的微任务实在状态转变之后注册的
*/

let p1 = new Promise((resolve, reject) => {
  // resolve("aha");//状态转变为成功 并发出通知 aha
  reject('失败'); //失败要对失败进行处理 不然会报错
})//.then(null,()=>{}); //用then 成功状态无需处理的话 则第一个参数为null

new Promise((resolve, reject) => {
  resolve(p1);//接受上一个promise p1的状态 并将其传递给then中的参数 成功则传递给value 失败则传递给err 
  //就算当前使用resolve注册的任务 但是传递过来的状态是失败 注册的还是失败处理的微任务
}).then(
  (value) => console.log("成功：" + value),
  (err) => console.log("失败：" + err)
);
