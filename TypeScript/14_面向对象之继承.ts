
/* 
我们在写Dog类具有属性 name age 方法sayHello
    写Cat类也具有与Dog类类似的属性和方法 只是sayHello方法有细微的不同 以后可能还有Monkey类等 
    都写这么多的话就很繁琐 就可以将它们共同的特征都提取出来 创建一个父类 让他们都继承自父类 就会简单很多
    
    继承后的子类会拥有父类定义的所有属性和方法 ，同时也可以添加属于子类自己的属性和方法 
    甚至可以重新改写和调用（super用作方法）父类中的方法

    记住：子类中通过super调用父类的方法 若父类方法中有this 这个this指向的是子类的实例
            super关键字可以用作属性和函数 用作函数只能放在构造函数中 用作属性类似于this 
            在子类的普通函数中 super指父类的原型 在子类的静态函数中指向父类

*/
// 立即执行函数用于创造块作用域 避免命名冲突
(function(){
    class Animal{
        name1:string
        age:number
        size:string = '中型动物'
        constructor(name1:string,age:number){
            this.name1 = name1
            this.age = age
        }
        sayHello():void{
            console.log('动物叫~');
        }
        getSize():string{
            return this.size
        }
    }

    // 子类Dog类 子类中如果写了构造函数就一定要调用super
    class Dog extends Animal{
        size:string //添加自己的新属性
        constructor(name1:string,age:number,size:string){
            super(name1,age) //也需要在构造函数中声明传递的参数类型
            this.size = size
        }
        //重写父类的方法
        sayHello(){
            console.log('汪汪汪~');
        }
        // 重写并调用父类的方法
        getSize():string{
            return `我的体型是${super.getSize()}`
        }

        // 添加属于自己的新方法
        getName():string{
            return this.name1
        }
    }

    //Cat子类
    class Cat extends Animal{
        // 重写父类的方法
        sayHello(){
            console.log('喵喵喵~');
        }
    }

    // 实例化狗狗
    const erha = new Dog('哈士奇',7,'Medium')
    erha.sayHello(); //汪汪汪~  子类重写的方法
    console.log(erha.getSize()); //父类的this指向了子类的实例化对象 输出 medium
    console.log(erha.getName()); //子类自己的方法

    // 实例化喵咪
    const buou = new Cat('布偶猫',3)
    buou.sayHello();//喵喵喵~

})()