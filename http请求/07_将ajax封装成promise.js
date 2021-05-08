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
/*  JS中 onreadyStateChange时间和onload事件 都答应了1 因为地址都发过去了
    1. XMLHttpRequest对象有一个属性readyState，将其(xhr.readyState)打印后发现。
       进入onreadystatechange请求方式中时，可以打印其状态为2，状态为3，状态为4
    2，进入onload之后，只出现了状态码4。
       也就是说，只有处于状态码4，请求已完成，响应已就绪的情况下，才会进入onload。
       只要进入onload请求中，一定是已经到4这个状态了。

作者：祝名
链接：https://www.jianshu.com/p/f914c9c8f4e7
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


 */
function ajax(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);//async默认为true  url后面可用问号查询/发送数据
        xhr.send();
     /*    xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status ==200){
                    resolve(xhr.response)
                }else{
                    reject(xhr.status)
                }
            }
        } */
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