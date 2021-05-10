// 基础静态类型
// number string null undefined boolean 
const num:number = 1;
const str2:string = '1';
const n1:null = null;
const un1:undefined = undefined;
const b1:boolean = true;

//对象静态类型
// 对象 数组  函数 类 
let obj:object={name:'xiaoming',height:180} //可声明空对象 对象不可更改
//必须且只能实现类型里得属性或方法 接口？？
const obj1:{uname:string,age:number} = {uname:'xiaohong',age:18} 

//数组
let arr:string[] = ['1','2','3']
arr.push('4') //元素只能是string类型
console.log(arr)

let arr2:number[]=[1,2,3] //元素只能是number类型 
arr2.push(4)
console.log(arr2)

let arr3:any[] = [1,2,'3',4]

//函数类型
let fun1:()=>string = ()=>'function1' //函数类型且必须返回字符串

//类类型
class Calss1{}
let cls:Calss1 = new Calss1() //类类型必须是类得实现 即类的对象