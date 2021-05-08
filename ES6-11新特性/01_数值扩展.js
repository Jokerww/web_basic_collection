/* 
二进制和八进制表示法 : 二进制 0b 八进制0o 十六进制0x
Number.isFinite()：判断数值是否为有限数值 
Number.isNaN()：判断变量是否为NaN
Number.parseInt():将全局的psrInt()改成了对象方法 转化为整数
 Number.parseFloat()：将全局的psrFloat()改成了对象方法 转化为浮点数
Number.isInteger()：判断变量是否为整数
Number.EPSILON：最小精度 极小的常量 它表示 1 与大于 1 的最小浮点数之间的差
安全整数和 Number.isSafeInteger()：判断是否为安全整数
Math 对象的扩展：
指数运算符： **  2**3 = Math.pow(2,3)=8
BigInt数据类型:新增数据类型 表示大的整数 用于超过安全整数的整数运算
                不能与普通整数直接运算 需要将其转化为BigInt类型
*/

// 二进制和八进制表示法 : 二进制 0b 八进制0o 十六进制0x
const b = 0b101101
console.log(b); //输出十进制数45
const o = 0o7221
console.log(o);
const x = 0xFe23
console.log(x);

// Number.isFinite()：判断数值是否为有限数值 
const num1 = 7/3
console.log(Number.isFinite(num1)); //类静态方法

// Number.isNaN()：判断变量是否为NaN
const str1 = '123a'-2 
console.log(Number.isNaN(str1)); //只有当str是NaN的时候返回true  字符串数值啥的都返回false

// Number.parseInt():将全局的parInt()改成了对象方法 转化为整数
const num3 = 123.9
console.log(Number.parseInt(num3)); //直接去掉了小数点后的内容

//  Number.parseFloat()：将全局的psrFloat()改成了对象方法 转化为浮点数
const num4 = 123.3333
console.log(Number.parseFloat(num4));

// Number.isInteger()：判断变量是否为整数
console.log(Number.isInteger(num4));

// Number.EPSILON：最小精度 极小的常量 它表示 1 与大于 1 的最小浮点数之间的差
const num5 = 0.1+0.2  //并不等于0.3 而是等于更大点的浮点数
function equal1(a,b){
    if(Math.abs(a-b)<=Number.EPSILON){
        return true
    }else{
        return false
    }
}
console.log(equal1(num5,0.3)); //true 

// 安全整数和 Number.isSafeInteger()：判断是否为安全整数
// JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
// 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isSafeInteger(Infinity)); //false 正无穷不是安全整数
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1)); //false

// Math 对象的扩展：
// Math.trunc方法用于去除一个数的小数部分，返回整数部分 对于非数值，Math.trunc内部使用Number方法将其先转为数值。对于空值和无法截取整数的值，返回NaN。
console.log(Math.trunc(21.9));//21
console.log(Math.trunc('nd123.4')); //Nan
console.log(Math.trunc('123.4'));//123
// Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
// 参数为正数，返回+1；
console.log(Math.sign(2));
// 参数为负数，返回-1；
console.log(Math.sign(-2));
// 参数为 0，返回0；
console.log(Math.sign(0));
// 参数为-0，返回-0;
console.log(Math.sign(-0));
// 其他值，返回NaN。
console.log(Math.sign('kkk'));

// 指数运算符： **  2**3 = Math.pow(2,3)=8
console.log(2**10);

// Math.cbrt()方法用于计算一个数的立方根。
console.log(Math.cbrt(8));

// Math.hypot方法返回所有参数的平方和的平方根 直角函数边
console.log(Math.hypot(3,4)); //5

// BigInt数据类型:新增数据类型 表示大的整数 用于超过安全整数的整数运算 不能与普通整数直接运算 需要将其转化为BigInt类型
// JS无法正确运算超过安全数值 Number.MAX_SAFE_INTEGER 的值 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER+1);
console.log(Number.MAX_SAFE_INTEGER+2); //计算错误
// BigInt数据类型的表示方法 是在数字后面加n  或者直接调用BigInt()方法转换
console.log(typeof 222n); //BigInt
console.log(BigInt(Number.MAX_SAFE_INTEGER)+BigInt(2)); //计算正确