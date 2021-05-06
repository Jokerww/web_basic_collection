/*Symbol数据类型时JS里的第七种数据类型 
    Symbol表示独一无二的值  是一种类似于字符串的数据类型
        1，Symbol值时唯一的 用来解决命名冲突的问题
        2，不能与其他数据进行运算 加减乘除拼接啥啥都不行
        3，定义的对象属性不能用for..in 便利 但是可以使用 Reflect.ownKeys来获取对象的所有键名


*/
const x = {};
x[Symbol.replace] = (...s) => console.log(s); //把传入的所有参数都打印出来

// 'Hello'.replace(x, 'World') // ["Hello", "World"]
let s1 = 'Hello'.replace(x, 'World') //返回被替换后的值 怎么就是undefined??
console.log(s1);


let s ="Heloo" 
let s2 = s.replace('o',2)
console.log(s2);
