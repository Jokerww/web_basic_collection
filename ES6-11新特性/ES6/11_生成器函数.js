/* 生成器函数 Generator  
祥见 https://es6.ruanyifeng.com/#docs/generator
    1, Generator 函数是 ES6 提供的一种异步编程解决方案，可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态
       执行 Generator 函数会返回一个遍历器对象 可以依次遍历 Generator 函数内部的每一个状态
    2， 形式上，Generator 函数是一个普通函数，但是有两个特征。
       一是，function关键字与函数名之间有一个星号；
       二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）
    3，Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。
       不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象
       需要手动调用next()函数才会接着执行 next()和迭代器里的一样 返回一个对象{value,done}

       function* helloWorldGenerator() {
           //part 1
            yield 'hello';
            //part 2
            yield 'world';
            //part 3
            return 'ending';
            //part 4
        }
        上述函数被yield和return分隔成了四个部分 每执行一次next()就执行一部分 遇到yield/return就停止执行并返回yield/return后面的值

    4，yield语句类似于return 相当于一个暂停符，但不会像return一样彻底停止函数的执行，下一次调用next()可以接着往下执行
       yield语句和return语句将函数分隔成多个状态 每一次调用next()会执行指针上一个停靠点和yield或return之间的状态 
       遇到yield或return便会暂停  yield和return后面的值也会返回给next()函数的value属性 
    5，yield语句本身不会有返回值 或返回值是undefined  即
        a = yield '5' = undefined ,  5是next()函数的返回值 即 b=next()={value:'5',done:false}
        next()函数可以传入参数 这个参数将作为上一个yeild语句的返回值 第一次执行到第一个yield就停止了 并没有上一个yield 所以不用传值
        之后的next('6')这个'6'会给yield的返回值 
*/

// 基本语法 函数可以正常传递参数
function* gen(param){
    console.log(param);
    yield 11;
    console.log('b');
    yield 22
    console.log('c');
    return 33; //next()函数碰到return后 其返回值的done为true表示函数执行已完成
    console.log('d'); //return后面的代码始终无法执行
}
const gene = gen('a')
/* 
gene.next();//返回'a' 执行了代码片段1 
gene.next();//返回'b' 执行了代码片段2 
gene.next();//返回'c' 执行了代码片段3 
gene.next();//return后的代码无法执行
 */

console.log(gene.next()); //返回导致此次暂停的yield后面的值 11 done:false
console.log(gene.next()); //返回导致此次暂停的yield后面的值 22 done:false
console.log(gene.next()); //返回导致此次暂停的return后面的值 33 done:true
console.log(gene.next()); //此次及之后的 都返回 undefined true

// next()函数的参数传递 
function* gen1(){
    const val1 = yield 'a';
    console.log(val1); //传给第二个next()的值
    const val2 = yield 'b';
    console.log(val2);//传给第三个next()的值
}
const gene1 = gen1();
console.log(gene1.next());
console.log(gene1.next('第二次next传的值'));
console.log(gene1.next('第三次next传的值'));//没有return的话 运行到最后一部分时 done:true


//简单应用 异步执行以下函数
function getData1(){
    console.log('data1');
    setTimeout(_=>{
        asy.next();//第二次调用next() 此处甚至可以将data传入 在生成器函数里接收 给了第一个yield的返回值 
    },1000)
}
function getData2(){
    console.log('data2');
    setTimeout(_=>{
        asy.next();//此处甚至可以将data传入 在生成器函数里接收 
    },1000)
}

function getData3(){
    console.log('data3');
    setTimeout(_=>{
        asy.next();//此处甚至可以将data传入 在生成器函数里接收 
    },1000)
}

function* Asy(){
    yield getData1();
    yield getData2();
    yield getData3();
}
const asy = Asy();
asy.next(); //输出了data1 为了连续调用 可以在原函数里使用next()函数