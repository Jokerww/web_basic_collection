//将 setTimeOut()封装成Promise
//setTimeOut基本形式 setTimeout(callback,delay)

function timeOut(delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('时间到了'),delay)
    }).then(msg=>console.log(msg)).catch(null)
}


//将setTimeInteaval封装成 Promise
//setTimeInteaval(callback,delay) 会重复执行 因此需要给一个id以便及时清除
function timeInterval(delay,callback){
    new Promise(resolve=>{
        let id111 = setInterval(() => {
            callback(id111,resolve)
        }, delay);
    })
}
timeInterval(1000,(id,resolve)=>{ //此处的id是形参 用来接收上边callback传过来的id
    console.log(11111);
    clearInterval(id);
    resolve('时间到')
})