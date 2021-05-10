//给数组添加类型注解 
// 定义数组的两种方式：1，元素类型加上[]  2，数组泛型Array<元素类型>
let list1:String[] = ['1','2','3']
let list2:Array<String> = ['1','2','3']
 //1,单一类型数组(利用单一类型注解)
let arr1:number[]=[1,2,3,4]
let arr12:string[] = ['a','b','c','d']

//2,多类型数组(利用联合类型注解)
let arr13:(number|string)[]=[1,'a',2]

//3,对象类型数组
//使用类型别名type 定义对象类型 此时的：就是类型注解 而非普通对象的赋值
type Lady = {name:string,age:number}
let arr14:Lady[]=[ //arr14是Lady类型的数组 数组的每一个元素都必须是Lady类型
    {name:'aaa',age:18},
    {name:'bbb',age:28}
]
// 4，交叉类型 根据两个对象创造一个新对象 新对象拥有两个对象所有的功能
function extend<T,U>(first:T,second:U):T&U{
    const result = <T&U>{}
    for(let id in first){
        (<T>result)[id] = first[id];
    }
    for (let id in second){
        (<U>result)[id] = second[id];
    }
    return result;
}
console.log(extend({a:'123'},{b:'abc'}));