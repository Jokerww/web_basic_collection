/* 在JS中 万物皆为对象 对象根本上来说就是对实物的抽象 每个实物都有它的特征和功能
    抽象到对象中 就是对象也具有属性和方法   对每个实物的操作抽象到程序中就是对对象的操作 
    例如打开控制台是对控制台console的操作 console.log() 对浏览器的操作 windows.

    想要操作对象就就必须得现有对象 类就是用来创造对象的 创造一类具有类似属性和方法的对象
    通过Person类创造person对象  通过Dog类创造littleDog对象

    类/对象中包含属性和方法：
        类中的实例属性：属于实例的属性  在new了一个类之后 这些属性存在于类的实例化对象中 通过实例来访问 
                        在构造函数里声明的属性、不带static的与方法同级的增强写法的属性 都属于实例属性 
                        没有被readonly修饰的实例属性 实例化后可以获取和修改 
                        被readonly修饰的实例属性 只有new的时候可以修改（赋值） 实例化之后只能读取
        类的静态属性：也成为类的静态属性 在构造函数之外定义 前面加上static关键字 通过类访问 不需要创建对象就可以用
                没有被readonly修饰的静态属性 可以通过类访问和修改 被readonly修饰的静态属性不能修改 只能用

        类的构造函数方法：构造函数用于初始化实例方法 在new的时候会自动调用  在构造函数中的this表示当前的对象
        类的普通方法：方法名(){}来定义 这种定义的方法在外部单独调用时this指向会变 因此需要在构造函数中绑定this 或者直接用箭头函数定义
                    没有带static的直接写的方法 都是实例方法 通过实例去调用 被static修饰的方法为类方法 通过类调用

    访问类型：如上所示的static是访问类型的一种 控制着属性和方法的访问范围 在哪里可以被访问
            static: 被static修饰的属性/方法 只能通过类访问/调用
            public: 被public修饰的属性和方法可以在类的内部和外部使用
            protected: 被protected 修饰的属性和方法只能在 类及其子类 的内部使用  实例中无法使用
            private： 被private 修饰的属性和方法只能在类的内部使用
            abstract: 被abstract修饰的类是抽象类  抽象类不能被实例化 必须由子类继承 
                    抽象类成员不能被直接访问 且其子类必须实现其抽象类成员
*/

class Dog{
    // 在此处先进行属性的声明 然后在构造函数里传参 不需要传参的话可以直接在此处赋值
    dogName:string
    dogAge:number
    dogColor:string
    readonly dogSize:string = '中型犬'
    static dogGender:string ='female' //静态属性 只能通过类调用
    constructor(dogName:string,dogAge:number,dogColor:string){ //通过构造函数给声明的属性传参 写这么多 好麻烦哦~
       this.dogName = dogName
       this.dogAge = dogAge
       this.dogColor = dogColor
    //    this.bark = this.bark.bind(this) 最好是加上
    //    this.Wagging = this.Wagging.bind(this)
    }
    bark():void{
        console.log(`我是${this.dogName}，我可以吠叫！！ ${this}`);
    }
    Wagging():void{
        console.log(`我的年龄是${this.dogAge}岁，我会摇尾巴`);
    }
    sayHello=():void => {
        console.log('汪汪汪~');
    }
}

// 实例化一个狗的对象
let erha = new Dog('哈士奇',8,'黑色')
console.log(Dog.dogGender); //类调用静态属性
erha.bark();
erha.Wagging();
erha.sayHello();
console.log(erha.dogSize);
// erha.dogSize = '大型犬' 不能给只读属性修改值