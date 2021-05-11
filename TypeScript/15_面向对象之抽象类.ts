/*  
像Animal这种范围很大的父类 我们大多数时候希望他去派生子类 并不希望通过它来实例化 实例化毫无意义
这是就可以将Animal类写成抽象类 抽象类就是专门做父类用的 用来派生的 不能被实例化 这样就会避免一下不必要的麻烦
抽象类除了不能被实例化跟其他的类没什么区别 生来就是给别人当爸爸的~

    被abstract修饰的类 成为抽象类 不能被实例化 只能被派生 
    抽象类中被abstract修饰的抽象类成员不能被直接访问 且子类必须实现

    抽象方法：只有函数解构 如函数名、返回值类型等 没有函数体 子类必须将其重写
 */
(function(){
    // 创造一个抽象的Animal类
    abstract class Animal {
        name1:string
        age:number
        abstract gender:string = 'male'
        static color:string = 'red'
        constructor(name1:string,age:number){
            this.name1 = name1
            this.age = age
        }
        /* 这个其实没啥意义 终归是要被重写的 还不如定义一个抽象方法
        sayHello():void{
            console.log('动物叫~');
        } */
        abstract sayHello():void //抽象方法不能有具体的实现 连{}都不能写  必须由子类重写实现
        abstract run=():void=>{} //箭头函数实际上是属性 鼠标放上去是property
    }

    class Dog extends Animal {
        gender: string = 'female' //父类的抽象属性 必须通过重写来实现这个属性 没啥大的必要
        size:string 
        constructor(name1:string,age:number,size:string){
            super(name1,age) //也需要在构造函数中声明传递的参数类型
            this.size = size
        }
        //实现父类的抽象方法
        sayHello(){
            console.log('汪汪汪~');
        }
        run=():void=>{
            console.log('跑步呀~');
        }
    }

    // 对于抽象类Animal 试图实例化 和访问其静态属性
    // const animal1 = new Animal() 报错 无法创建抽象类的实例
    console.log(Animal.color); //可以访问成功耶~

    const bigDog = new Dog('阿拉斯加',6,'Big')
    console.log(bigDog.size);
    console.log(bigDog.gender); //子类把抽象属性实现了 必须子类重新写一遍




})()