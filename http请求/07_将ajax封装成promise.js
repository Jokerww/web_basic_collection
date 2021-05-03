/*
最简单的Promise形式
new Promise((reslove,reject)=>{
    reslove('成功')
}).then(
    msg=>console.log('成功'),
    ere=>console.log('失败')
) 
上述形式过于简单 且执行很快 实际场景中要等待请求完成并处理结果并灵活复用 就需要将其封装成函数形式 便于调用
function pro(){
    return new Promise((reslove,reject)=>{
    reslove('成功')
})}
pro().then() 便可进行异步处理 then()函数处理的是返回值 pro()函数返回了promise
用的时候调用pro()函数即可 
*/
//基本的ajax形式
function ajax(url,callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);//async默认为true  url后面可用问号查询/发送数据
    xhr.send();
	xhr.onload = function(){
        if(this.status ==200){
            callback(JSON.parse(this.response)) //回调函数 请求成功后的处理
        }else{
            throw new Error('加载失败')
        }
    }	
}

//封装成Promise的ajax 将请求体置于Promise主体之内 当请求成功时抛出resolve 转变状态 请求失败是抛出reject
//调用 函数后再用then进行后续处理 回调函数就不用了

function ajax(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);//async默认为true  url后面可用问号查询/发送数据
        xhr.send();
	    xhr.onload = function(){
        if(this.status ==200){
            resolve(JSON.parse(this.response)) 
        }else{
            reject('加载失败')
        }
        xhr.onerror=function(){
            reject(this)
        }
    }	
    })   
}
// ajax().then() 完成请求后的处理