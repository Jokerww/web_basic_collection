/* 
1，扩展运算符： 数组内部实现了迭代器接口 可通过扩展运算符实现扩展
            可用于函数的调用 数组的合并  利用Msth.max(...numList)直接求取数组的最大值
            利用push一次性添加一个数组的元素值另一个数组 push(...arr)
            复制数组 深拷贝 [...arr1]=arr2
            可扩展 Map Set Generator等有迭代器的数据类型的数据
            与解构赋值结合生成数组   将字符串扩展成数组 
            无法扩展没有实现转换器接口的数据类型

2，Array.from()：强大的数组转换方法 能将任何类似数组的对象(array-like)和可遍历的对象转换成真正的数组
                （1）所谓类似数组的对象 本质就是具有length属性 任何有length属性的对象，
                        都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换
                        例如 querySelectAll得到的NodeList 函数参数的arguements 等
                （2） 实现了迭代器接口的数据 
3，Array.of()：用于将一组值转换为数组 弥补了Array()传递参数个数不同时得到的结果不同的缺陷
                Array.of()基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载
                Array.of()总是返回参数值组成的数组。如果没有参数，就返回一个空数组
4，数组实例的 copyWithin()：数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
                            也就是说，使用这个方法，会修改当前数组 copyWithin(target,start,end)
                            arr=[1,2,3,4,5] arr.copyWithin(0,3,4) => arr=[4,2,3,4,5]
5,数组实例的 find() 和 findIndex():数组实例的find方法，用于找出第一个符合条件的数组成员。
                            它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
                            如果没有符合条件的成员，则返回undefined
                        数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，
                        如果所有成员都不符合条件，则返回-1
6,数组实例的 fill(): fill方法使用给定值，填充一个数组。
                    fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
7,数组实例的 entries()，keys() 和 values():
                entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，
                唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
8,数组实例的 includes():Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
                        Map 结构的has方法，是用来查找键名的，比如Map.prototype.has(key)、WeakMap.prototype.has(key)、Reflect.has(target, propertyKey)。
                        Set 结构的has方法，是用来查找值的，比如Set.prototype.has(value)、WeakSet.prototype.has(value)。
9,数组实例的 flat()，flatMap():Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响
                      flat()默认拉平一层   如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。
                      flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），
                            然后对返回值组成的数组执行flat()方法。 默认只能拉平一层
10，数组的空位：entries()、keys()、values()、find()和findIndex()会将空位处理成undefined
                forEach(), filter(), reduce(), every() 和some()都会跳过空位。
                map()会跳过空位，但会保留这个值
                join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
Array.prototype.sort() 的排序稳定性：ES6中 sort()为稳定排序 

常用方法：
https://www.jianshu.com/p/18c9d6f0faa5
*/

// 扩展运算符
console.log(...[1,2,3,4,5]);
console.log([...[1,2],3,...[5,6]]);
console.log(Math.max(...[1,2,3,4,5]));
let arr1 = [1,2,3,4]
let arr2 = [5,6,7]
arr1.push(...arr2)
console.log(arr1);

const go = function*(){
    yield 1
    yield 2
    yield 3
}
console.log(...go()); //输出了yield返回的值
// Array.from()
let arrLike = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:3
}
console.log(Array.from(arrLike));
console.log(Array.from({length:3})); //返回了三个值的数组
// Array.of()
console.log(Array());//[]
console.log(Array(3));//[ , , ]
console.log(Array(3,4,5));//[3,4,5]

console.log(Array.of());//[]
console.log(Array.of(3));//[3]
console.log(Array.of(3,4,5));//[3,4,5]
// 数组实例的 copyWithin()
let arr3 = [0,1,2,3,4,5,6]
arr3.copyWithin(1,3,5) //将索引为3 4的值覆盖从索引为1开始的值
console.log(arr3);
// 数组实例的 find() 和 findIndex()
let arr4 = [1,2,3,4,5,6]
console.log(arr4.find(item=>item>4)); //返回第一个符合条件的值
console.log(arr4.findIndex(item=>item>4)); //返回第一个符合条件的值的索引

// 数组实例的 fill() fill(num,start,end)
console.log(Array(3).fill(7));
console.log(Array.of(3,4,5,6,7,8).fill(7,0,2));
// 数组实例的 entries()，keys() 和 values() 返回的是可迭代对象 而不是Object.keys()返回的数组
console.log(arr3.keys());
// 数组实例的 includes()
console.log(arr3.includes(3));
console.log(arr3.includes(7));
// 数组实例的 flat()，flatMap()
let arr5 = [1,[2,3],[12,[2,[3,4]]]]
console.log(arr5.flat());
console.log(arr5.flat(2));
console.log(arr5.flat(Infinity));
let arr6 = [1,2,3,4]
console.log(arr6.flatMap(item=>[,item,item*2])); //先map再铺开 如果是多层的话有点够呛
// 数组的空位
// Array.prototype.sort() 的排序稳定性