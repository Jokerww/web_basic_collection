/* 
1,字符的 Unicode 表示法: \uXXXX  只能表示 \u0000-\uFFFF 超过了这个范围就要用两个
2,字符串的遍历器接口：可以使用for...of 和 ...
3,直接输入 U+2028 和 U+2029
4,JSON.stringify() 的改造:为了确保返回的是合法的 UTF-8 字符，ES2019 改变了JSON.stringify()的行为。
                        如果遇到0xD800到0xDFFF之间的单个码点，
                        或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理
5,模板字符串``:可用于字符串拼接 和函数的调用
6,标签模板：即函数的调用  foo `name` name为传入函数foo()的参数
7,模板字符串的限制 ：不能用于Latex

9,String.fromCodePoint():ES5 提供String.fromCharCode()方法，用于从 Unicode 码点返回对应字符，
                        但是这个方法不能识别码点大于0xFFFF的字符
                        String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足
10,String.raw():ES6 还为原生的 String 对象，提供了一个raw()方法。
                    该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。
11,实例方法：codePointAt():codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。
12,实例方法：normalize():ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化
13,实例方法：includes(), startsWith(), endsWith():见ES6/字符串方法
14,实例方法：repeat()：repeat方法返回一个新字符串，表示将原字符串重复n次。
15,实例方法：padStart()，padEnd()：字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全
               str.padStart(len,补全用的字符)
16,实例方法：trimStart()，trimEnd()：去掉字符串头尾的空格
17,实例方法：matchAll()：搭配正则 匹配所有符合条件的字符串
18,实例方法：replaceAll()：全局替换符合条件的字符 aabbcc.replaceAll('b','*') => aa**cc
                    用于正则时需要加全局标识符 g
https://es6.ruanyifeng.com/#docs/string-methods


常用方法：
https://blog.csdn.net/qq_44647809/article/details/116485148
*/

// 实例方法：padStart()，padEnd()
let str = 'ab'
console.log(str.padStart(5,'xx'));
console.log(str.padEnd(5,'xx'));
// 实例方法：trimStart()，trimEnd()
let str1 = '   aa   '
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());
// 实例方法：matchAll()
// 实例方法：replaceAll()
const str2 = "aaabbbccc"
console.log(str2.replace('b','*')); //只替换第一个
// console.log(str2.replaceAll('b','*')); //是还没更新么？？
// console.log('abc'.replaceAll('b', '$$'));