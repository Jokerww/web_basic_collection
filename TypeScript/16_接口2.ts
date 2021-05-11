/* 
 接口实际上就是定义了一个类的结构 定义了类的规范 有了这个规范就能在特定场合使用  接口的用途：
        1，约束对象和函数 类似于类型别名  func：funcInterface
        2,定义类的时候去限制类的结构 类似于抽象类 class cls implements clsInterface{}
        3,用做别的接口来继承

 接口与抽象类的区别： 抽象类是用来继承的 抽象类的成员可以是抽象的 也可以是实际的（给属性赋值 定义具体的方法）
                    接口是用来实现的 接口中成员都是抽象的 都不是实际的 属性没有赋值 方法也只有结构


接口与类型别名的区别： 接口可以用当类型别名来用 都去约束对象或函数 
                    但是！ 类型别名只能声明一次 type Mytype={} 这个myTpye只能有一个 重复声明会报错
                    接口可以声明多次 interface myInter{A;B} interface myInter{C} 实际在用myInter{A;B;C} 并集！
*/
(function(){

    type myType={
        name:string,
        age:number
    } 
    // type myType = { 报错了
    //     gender:string
    // }

    interface myInterface{
        name:string,
        age:number
    } 
    interface myInterface{ //并没有报错
        gender:string
    }
    //作为类型限制使用
    const obj:myType={
        name:'小明',
        age:18
    }
    const obj1:myInterface={
        name:'小明',
        age:18,
        gender:'male'
    }

    // 接口更主要的是 用作定义类的结构体
    interface Animal{
        type:string,
        age:number,
        gender:string,
        sayHello():void
    }
    class Dog implements Animal{
        type:string = '狗'
        age:number
        gender:string
        constructor(age:number,gender:string){ //初始化属性
            this.age = age
            this.gender = gender
        }
        sayHello(){
            console.log('汪汪汪~');
        }
    }
    let erha = new Dog(7,'male')
    erha.sayHello();

})()