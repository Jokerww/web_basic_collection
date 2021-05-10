// 定义了静态类型的变量之后，变量的类型是不可改变的
/* 
boolean number string []

undefined和null:默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
            然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 
            也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。 
never:never类型表示的是那些永不存在的值的类型。 
    例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
    变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
    never类型是任何类型的子类型，也可以赋值给任何类型；
    然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
*/

/* 类型断言：当你清楚地知道一个实体具有比它现有类型更确切的类型，可以通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 
    类型断言的两种方法：
        “尖括号”语法：let someValue:any = 'This is a string'  let strLength: number = (<string>someValue).length; //括号里就是断言 它定义时any 但是他就是string
        as 语法：let someValue:any = 'This is a string'  let strLength: number = (someValue as string).length;


*/
let count:number = 2
count = 3 //只能为其赋值number类型
count.toFixed(2) //count变量直接继承了number类型的内置属性和方法
console.log(3)

let str:string = '123456'
let str1:string = str.substring(1,3)
console.log(str1)

//类型断言
let someValue:any = 'This is a string';
// let valueLength:number = (<string>someValue).length;
let valueLength:number = (someValue as string).length
console.log(valueLength);