let arr21:(string|number)[] = ['name','height',2]
arr21 = ['name',2,'height'] //元素调换顺序依旧不会报错

//元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let arr22:[string,string,number] = ['name','height',2] //指定了某个位置必须是什么类型 
// arr22 = ['name',2,'height'] 对应类型错误会报错

// 当访问一个越界的元素，会使用联合类型替代：
// console.log(arr22[3]); 报错
