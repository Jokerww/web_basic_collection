//类的访问类型 public protected private
// 区分类的内部和外部：内部指的是定义类时的大括号括起的范围 外部指的是大括以外的范围
//  public 修饰的属性和方法可以在类的内部和外部使用
// protected 修饰的属性和方法只能在 类及其子类 的内部使用 
// private 修饰的属性和方法只能在类的内部使用

//在不加访问类型时 默认为public
//给name 和 sayhello加访问类型修饰 查看报错信息
class Person{
    name:String;
    sayHello(){
        return this.name+',你好呀~'
    }
}

class Teacher extends Person{
    teach(){
        return this.name + '教学'  //此时用this访问父类的属性 只有public和protected修饰的父类方法才能用super访问
    }
}
const p1 = new Person()
p1.name = '小明'
console.log(p1.sayHello())