### 一、前端发起http请求的几种方式
#### 1,XMLHttpRequest

```javascript
//第一步，创建XMLHttpRequest对象
var xmlHttp = new XMLHttpRequest();
function CommentAll() {
 //第二步，注册回调函数
 xmlHttp.onreadystatechange =callback1;
 //{
 //    if (xmlHttp.readyState == 4)
 //        if (xmlHttp.status == 200) {
 //            var responseText = xmlHttp.responseText;
 //        }
 //}
 //第三步，配置请求信息，open(),get
 //get请求下参数加在url后，.ashx?methodName = GetAllComment&str1=str1&str2=str2
 xmlHttp.open("post", "/ashx/myzhuye/Detail.ashx?methodName=GetAllComment", true);
 //post请求下需要配置请求头信息
 //xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 //第四步，发送请求,post请求下，要传递的参数放这
 xmlHttp.send("methodName = GetAllComment&str1=str1&str2=str2");//"
}
//第五步，创建回调函数
function callback1() {
 if (xmlHttp.readyState == 4)
 if (xmlHttp.status == 200) {
 //取得返回的数据
 var data = xmlHttp.responseText;
 //json字符串转为json格式
 data = eval(data);
 $.each(data,
 function(i, v) {
 alert(v);
 });       
 }
}
```



#### 2,ajax

- ajax是由JQery封装的xhr对象api，本质是xhr对象 用于发送http请求 基本用法如下：

```javascript
$.ajax({
  url: "/api/getWeather", //请求地址
  data: {  //请求数据的类型form/json在header的contentType中定义 以下为json类型
    zipcode: 97201
  },
  success: function( result ) { //数据请求成功的处理方式
    $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  }
});
```

- 以下为学习版本

```javascript
// 基本用法无参数get请求
$.ajax({
    url:"demo_test.txt",
    success:function(result){
        console.log(result);
    }
}
// 需指定方法则增加method字段
$.ajax({
    url:"demo_test.txt",
    method:"POST",
    success:function(result){
	console.log(result);
    }
}
// 有参数，则增加data字段，有请求头则增加headers字段，有错误处理增加error字段
// 默认是按照表单提交post方法，data中虽然是json但是提交时转成表单
$.ajax({
    url:"demo_test.txt",
    data:{a:10},
    success:function(result){
    	console.log(result);
    },
    error:function(xhr,status,error){
    	console.log(error);
    }
});
// data在post下是表单格式，在get下是querystring格式
// 通过以下方法指定为json格式[json格式本质就是body里是json字符串，头里是application/json]
$.ajax({
    url:"demo_test.txt",
    headers:{ contentType: "application/json"},
    method:"POST",
    data:JSON.stringify({a:10}),
    success:function(result){
	console.log(result);
    }
});
```



#### 3,fetch

- fetch是一种HTTP数据请求的方式，是XMLHttpRequest的一种替代方案。fetch不是ajax的进一步封装，而是原生js。Fetch函数就是原生js，没有使用XMLHttpRequest对象
  它的API是基于Promise设计的 在nodejs中使用需要引入 node-fetch
- http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html

```javascript
// fetch的post表单数据用法
fetch(url,{ //请求地址写在外面
    headers:{
         'content-type': "application/x-www-form-urlencoded"
    },
    method:"POST",
    body:"a=12&b=33",
})
.then(res=>res.json())
.then(data=>console.log(res))
.catch(e=>{})
// fetch的post json数据用法
fetch(url,{
    headers:{
         'content-type': "application/json"
    },
    method:"POST",
    body:JSON.stringify({a:100}),
})
.then(res=>res.json())
.then(data=>console.log(res))
.catch(e=>{})
```

- 接受fetch 返回的对象

```javascript
fetch('https://api.github.com/users/ruanyf')//发起请求
  .then(response => response.json())//将接受的数据转化为json格式
  .then(json => console.log(json))//打印数据
  .catch(err => console.log('Request Failed', err)); //捕获错误
```



#### 4,axios

- 基于promise的http库, 支持Promise所有 API,支持async,await, 安全性更高,客户端支持防御XSRF
  可以转换请求数据和响应数据,并对响应回来的内容自动转换成JSON类型的数据,可以拦截请求和响应.
- 使用方法与fetch类似 

```javascript
// axios默认是json类型的提交
axios({
    url:"http://localhost:99?x=1",
    method:"POST",
    data:{a:12}
})
.then(res=>console.log(res.data))
// 如果想改成form则需要修改headers和data格式
axios({
    url:"http://localhost:99?x=1",
    method:"POST",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    data:"a=12&b=23"
})
.then(res=>console.log(res.data))
```



```javascript
//使用方法一
   axios({ methods: 'get', url: '/ulr' })
   //如下：
   axios({
   methods: 'post',
   url: '/url',
   data: data,
   config: config
 })
//使用方法二
	axios.post('/url',data,config)
	//或：
    axios.get('/url', {params: {id: 12}}) 
```

#### 5,request

- JavaWeb请求方式

### 二、常用的HTTP请求方法

- https://blog.csdn.net/dreamingbaobei3/article/details/95938517



### 三、进程与线程 

- 进程可以理解为一个在内存中运行的应用程序。每个进程都有自己独立的一块内存空间，一个进程可以有多个线程，比如在Windows系统中，一个运行的xx.exe就是一个进程。
- 线程是进程中的一个执行任务（控制单元），负责当前进程中程序的执行，一个进程至少有一个线程，所有的线程共享该进程的系统资源。与进程不同的是同类的多个线程共享进程的**堆**和**方法区**资源，但每个线程有自己的**程序计数器**、**虚拟机栈**和**本地方法栈**，所以系统在产生一个线程，或是在各个线程之间作切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程。
- 就相当于 洗车这个程序是一个进程 洗车工 美容工 修理工 做的事情就是洗车进程的各个线程 他们共享洗车这个进程的车位资源

### 四、宏任务与微任务 与事件轮询、任务队列

- 执行顺序 同步任务>异步   宏任务在主线程里开始执行 (不一定执行完了 比如异步任务)  微任务在微任务队列里

- Promise 注册了一个微任务 是在宏任务创建的过程当中创建出来的  
- 主线程的同步任务执行完之后，才会扫描微任务队列 将微任务添加至主线程执行 并重复这个过程直至微任务队列为空 这个过程就是事件轮询。 完成所有的任务后 页面会<span style="color:red">重绘?</span>

