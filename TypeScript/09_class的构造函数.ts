//当字类中写constructor函数时 必须调用super()方法
class Person1{
    constructor(public name:string){
        this.name = name
    }
    sayHello(){
        return this.name+',你好呀~'
    }
}

class Teacher1 extends Person1{
    constructor(public age:number){
        super('小明')
        this.age = age
    }
    teach(){
        return this.name + '教学'  //此时用this访问父类的属性 只有public和protected修饰的父类方法才能用super访问
    }
}
const p2 = new Teacher1(20)
console.log(p2.sayHello())
console.log(p2.age)
console.log(p2.name)