/* 
接口通常的用法是，当有多个变量或者类需要用到同一种类型注解时，为变量和类一个一个的写一遍类型注解非常繁琐
                接口的定义了一个解构化的类型 可以 实现 继承和约束变量（当类型注解用）
                此时就可以用到接口  让变量或者类去实现接口 就会很方便
                类的实现 implements  普通对象的实现 obj:Interface={}
        而类型别名type Type={}与接口的作用类似 只是给一个类型集合另起一个名字 多用于细粒度的约束变量
            主要就是对对象或者函数起到约束作用，特性没有接口多

        如果你仅仅想约束对象或函数变量 二者都行 多用别名
        如果想要被继承 用于类实现 对象等 最好用接口

*/

//定义一个类型别名 他只是类型的别名而已
type Girl2 = {name:string,age:number} //对象的别名
type Str = string //字符串的别名

// 定义一个接口
interface In1{
    name:string;
    age:number;
    height?:number;//？表示可以不实现
    readonly size?:number; //只读属性只允许在对象创建的时候修改其值
    [propname:string]:any; //可自定义添加属性名为string 值为任何类型的属性
    say():string; //实现的方法 必须有返回值且返回值为string
    call(name:string):boolean
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
    call=()=> {return true}
}

//类型限制的例子
const girl11={
    name:'小红',
    age:20,
    height:163,
    say:()=>'我是wwwww',
    call:()=>{return true}
}


const test=(girl1:In1)=>{ //此处为形参设置的类型限制 为In1
    console.log(girl1.name)
    console.log(girl1.age)
    console.log(girl1.height)
    console.log(girl1.say())
}

test(girl11) //若girl1变量没有实现In1接口必须实现的属性或方法 则此处会报错 参数类型错误


// 另一个例子  传入接口中没有定义的属性会出错 以下三种解法
interface LabelValue{
    label:string
    // [proname:string]:any //解法1：字符串索引签名允许之后的类似于地下的size这种添加更多的别的属性
}
function printLabel(labelObj:LabelValue):void{
    console.log(labelObj.label);
}
// printLabel({label:'Im a Label',size:10}as LabelValue) //解法2：使用了类型断言 size属性就不会报错了 
// 解法3 将实参赋值给另一个变量 再传参
let labeloption = {label:'Im a Label',size:10}
printLabel(labeloption)  //labeloption不会经过额外属性检查，所以编译器不会报错。