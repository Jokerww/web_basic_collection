/* 迭代器 iterator 本质是对象的 Symbol.iterator()方法
    1,遍历器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。
       任何数据结构只要部署 Iterator 接口，就可以完成遍历操作和扩展运算 ...
    2,Iterator 的作用有三个：
        一是为各种数据结构，提供一个统一的、简便的访问接口；
        二是使得数据结构的成员能够按某种次序排列；
        三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。  

    3,Iterator 的遍历过程是这样的。

        （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
        （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。。
        （3）不断调用指针对象的next方法，指针不断往后移 直到它指向数据结构的结束位置。
        （4）每一次调用next方法，都会返回一个包含value和done两个属性的对象。
            其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

    4，原生具备 Iterator 接口的数据结构如下。
        Array
        Map
        Set
        String
        TypedArray
        函数的 arguments 对象
        NodeList 对象
*/
/* // 迭代器
const arr1 = ['a','b','c','d'];
for (const v of arr1) {
    console.log(v); //打印键的值  for in 打印索引/键名
}

// 本质
let iterator = arr1[Symbol.iterator]();
console.log(iterator);
// Symbol.iterator中包含next方法 返回一个对象
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());//遍历完了 输出 undefined、 true
 */

//  自定义一个对象的迭代器 
// 普通的{}对象是没有迭代器的 不能用for of来遍历
// 需要给对象写一个 Symbol.iterator方法 包含next方法来完成
const stu = {
    class:'一班',
    members:['小明','小红','小兰','小白'],
    //这个位置的this指向的是windows 因为对象没有初始化完成 
    [Symbol.iterator](){ //this指向变成了stu
        let index = 0;
        // 这个位置的this指向的是对象stu
        return {
            next:()=>{ //函数块里this指向改变了 所以直接用箭头函数
                if(index < this.members.length){
                   const result = {value:this.members[index],done:false}
                    index++
                    return result
                }else{
                    return {value:undefined,done:true}
                }
            }
        }
    }
}
// stu['len'] = stu.members.length
// console.log(stu);
// 目标 调用for of 打印members里的内容
for (const v of stu) {
    console.log(v);
}
