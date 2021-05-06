/*Symbol数据类型时JS里的第七种数据类型  数据基本数据类型 而不是引用数据类型
    Symbol表示独一无二的值  是一种类似于字符串的数据类型
        1，Symbol值时唯一的 可用来解决命名冲突的问题
        2，不能与其他数据进行运算 加减乘除拼接啥啥都不行
        3，定义的对象属性不能用for..in 便利 但是可以使用 Reflect.ownKeys来获取对象的所有键名
        更多：https://es6.ruanyifeng.com/#docs/symbol

        Symbol数据类型的创建：s=Symbol("说明参数")
            Symbol函数前不能使用new命令，否则会报错。
            这是因为生成的 Symbol 是一个原始类型的值，不是对象。
            也就是说，由于 Symbol 值不是对象，所以不能添加属性。
            基本上，它是一种类似于字符串的数据类型

        Symbol的内置属性都是Symbol属性的固定写法 Symbol.InstanceOf
        而这个内置属性的整体 可用作对象的属性 以在特定场景中对对象进行控制
        arr=[1,2,3] arr[Symbol.instanceof]=*** 可用来控制这个数组对象
        

*/
// Symbol数据类型的创建 
// typeof(表达式) 、 typeof 变量名
let s = Symbol(); 
let s1 = Symbol();
let s2 = Symbol('foo');//传入的字符串仅仅用作描述和说明 便于区分两个symbol 但二者仍是不同的值
let s3 = Symbol('foo');
console.log(s2===s3);//false
console.log(s===s1);//false
console.log(typeof s); //Symbol

// 通过Symbol.for("des")创建的Symbol变量 可以通过传入的参数‘des’得到唯一的值 也即是相同的参数值相同
// 他的实质并不是创建了一个相同的Symbol值 而是Symbol.for()在创建值的时候会对这个值进行全局登记 
// 下次创建的时候 若改参数已经被登记过 则直接调用之前的值
let s11 = Symbol.for('boo');
let s12 = Symbol.for('boo');
console.log(s11===s12); //true


// Symbol数据类型虽然不能及逆行运算和拼接  但是可以显示的转换成字符串和布尔值
console.log( s.toString() );
console.log( Boolean(s) );

// Symbol数据类型用作对象的属性名时 必须带中括号 不能用.点调用 只能中括号调用
// 对象的属性名之前只能是字符串 现在可以是Symbol数据类型
const obj = {
    name1:'小明',
    [s1]:"Symbol11"
}
obj[s2] = 'Symbol2'
console.log(obj);
console.log(obj[s1]);

let game={}
let methods = {
    up: Symbol(),
    dowm:Symbol()
}

console.log(methods.up);

game[methods.up] = function(){console.log("上升");}
game[methods.down] = function(){console.log("下降");}
console.log(game);
console.log(game[methods.up]);



/* const x = {};
x[Symbol.replace] = (...s) => console.log(s); //把传入的所有参数都打印出来

// 'Hello'.replace(x, 'World') // ["Hello", "World"]
let s1 = 'Hello'.replace(x, 'World') //返回被替换后的值 怎么就是undefined??
console.log(s1);


let s ="Heloo" 
let s2 = s.replace('o',2)
console.log(s2);
 */