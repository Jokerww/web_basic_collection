/* 
1，函数参数的默认值：直接在传参的时候为参数赋默认值 一般放在参数的尾部
        指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真
        如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
        一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。
        var x = 1;
        function f(x, y = x) {
             console.log(y);
        }
        f(2) //2
        
2，rest 参数：ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中
3，严格模式：规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错
4，name 属性：函数的name属性，返回该函数的函数名
5，箭头函数：箭头函数有几个使用注意点。
    （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
    （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
6，尾调用优化：尾调用（Tail Call）就是指某个函数的最后一步是调用另一个函数。
        function f(x){
            return g(x);
        }   
        尾递归：通过尾调用自身实现递归 由于只存在一个调用帧 永远不会栈溢出 

7，函数参数的尾逗号：因此新的语法允许定义和调用时，尾部直接有一个逗号
8，Function.prototype.toString()：toString()方法返回函数代码本身，以前会省略注释和空格
9，catch 命令的参数省略：try...catch结构，以前明确要求catch命令后面必须跟参数，接受try代码块抛出的错误对象
        很多时候，catch代码块可能用不到这个参数。但是，为了保证语法正确，还是必须写。ES2019 做出了改变，允许catch语句省略参数。

*/

// 函数参数的默认值 每次都惰性求值 有自己的作用域 
let x=99
function foo(p=x+1){console.log(p);}
foo() //100
x=100
foo() //101
console.log(foo.length); //0 默认值及其后面的参数都不会计入length属性
 
// 默认值的单独作用域 
let k = 1
function foo1(k,p=k+1){console.log(p);} //函数内部自动定义了参数k 全局也有个k
foo1(2) //p=2+1=3  作用域在其内部 顺着作用域链慢慢往上找k

function foo2(p=k+1){console.log(p);} 
foo2() //2 找到了全局的k 计算1+1=2 若全局没有k 会报错
//与解构赋值的结合使用
function foo3({x,y=5}){console.log(x,y);} //接收对象作为参数 函数内部解构赋值使用参数
foo3({}) //undefined 5
foo({x:1}) //1,5
foo({x:1,y:2}) //1,2

function foo4({x,y=5}={}){console.log(x,y);}
foo4() //对象的默认值为{}就是不给对象赋值 但是y有默认值 输出 undefeind 5

function fetch(url, { body = '', method = 'GET', headers = {} }) {
    console.log(method);
  } 
fetch('http://example.com', {}) // "GET"
// fetch('http://example.com') //报错 否则就给第二个对象参数指定默认值 
// rest 参数
function foo5(...restarg){console.log(restarg);} //restarg是一个真正的数组 arguments参数不是
foo5(1,2,3)

//箭头函数如果直接返回一个对象 需要在对象外加一个{} 否则会报错
const foo6=user=>{return {name:user.name, age:user.age}} //不加return 会报错 会将第一个:解析成label语句 此时第二个：会报错
console.log(foo6({name:'小米',age:18}));