/*  类的getter setter 和 static 
当类中的属性不能随意访问和修改时(一般是私有属性 private) 可以用setter和getter 
    getter于其说是方法 其实更像是属性 get修饰的方法来操作私有属性 并在类的外部获取
    如果手动写getAge(){return this._age} 访问的时候就必须调用getAge()方法 
    用了setter和getter就可以像访问public属性一样访问private属性了 但此时的主动权掌握在程序员手里 可以控制

protected修饰的属性只能在类和子类的内部访问 实例化对象是访问不了的


*/

class Girl22{
    // private _age:number 这是正常的声明方式

    // 简洁方式 在构造函数里直接声明
    constructor(private _age:number){

    }
     //@ts-ignore
    get age(){
        return this._age + 10
    }
    //@ts-ignore
    set age(age:number){ //setter不能返回值
         this._age = age + 15
    }
    static name1 = 'xiaoming'
}

const girl22 = new Girl22(20)
girl22.age = 30 //此处修改age便调用了setter 在settter里的_age变成了45 通过getter返回给外部又加了一层 变成了55
console.log(girl22.age) //操作了私有属性并返回
console.log(Girl22.name1) //static静态属性允许不创建实例便可直接调用

class A {
    protected num:number
    constructor(num:number){
        this.num = num
    }
}
class B extends A {
    
}
const b = new B(10)
// console.log(b.num); //报错了 访问不了