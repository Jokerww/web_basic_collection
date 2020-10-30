//定义一个类型别名 他只是类型的别名而已
type Girl = {name:string,age:number}
type Str = string

// 定义一个接口
interface In1{
    name:string;
    age:number;
    height?:number;//？表示可以不实现
    [propname:string]:any; //可自定义添加属性名为string 值为任何类型的属性
    say():string; //实现的方法 必须有返回值且返回值为string
}

//接口的继承 接口In2拥有In1的所有的属性 并且也有自己添加的属性
interface In12 extends In1{
    teach():string;
}

//类实现接口 必须实现接口中所有必须实现的属性和方法
class Cl1 implements In1{
    name='小红';
    age=18;
    say = ()=>'我是小红'   //必须有返回值为string
}

//类型限制的例子
const girl1={
    name:'小红',
    age:20,
    height:163,
    say:()=>'我是wwwww'
}


const test=(girl:In1)=>{ //此处为形参设置的类型限制 为In1
    console.log(girl.name)
    console.log(girl.age)
    console.log(girl.height)
    console.log(girl.say())
}

test(girl1) //若girl1变量没有实现In1接口必须实现的属性或方法 则此处会报错 参数类型错误