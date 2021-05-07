/* class用于创造构造函数
    calss Phone{
        name1 = '电话' //实例属性的新写法 实例属性只属于实例 不属于类 
        constructor(x,y){//构造函数 用于初始化实例属性 创建实例时自动调用
            this.x = x
            this.y = y
        } 
        call(){}  //类中定义的函数默认定义在类的原型prototype上
                 //当类中的函数使用了this的时候 需要在constructor中绑定this 
                 //否则实例化后将其单独使用时 this不再指向类的实例对象将会出错 不然就用箭头函数来定义函数
        static play(){} //类的静态方法 实例无法调用 只有类及其子类才能调用 
                        //类的静态属性只能通过 Phone.prop1 = '静态属性' 来添加 
    }
    类的实例 const phone1 = new Phone() 用来创建类的实例对象 实例对象的_proto_属性指向类的原型prototype 


    class继承使用extends关键字来完成
    class SmartPhone extends Phone{
        constructor(x,y,brand){
            super(x,y) //继承自父类的属性
            this.brand = brand
        }
        static fun1(){ //子类的静态函数
            super.... //此处使用的super指向父类
        }
        fun2(){..super} //此处使用的super指向父类的原型
                        //在子类普通方法中通过super调用父类的方法时，父类方法内部的this指向当前的子类实例。
    }
        （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。 SmartPhone._proto_ = Phone
        （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性 SmartPhone.prototype._proto_ = Phone.prototype
         (3) 子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。



    class里可定义getter和setter来定义 获取属性或者更改时属性时的行为
    class
    
*/
class Prop{
    constructor(title){
        this.title = title
    }
    get title(){
        console.log('获取了title属性');
    }
    set title(newVal){
        console.log(`title的值变成了${newVal}`);
    }
}
const prop1 = new Prop('属性')
console.log(prop1.title);
prop1.title = 'ahah'

class Phone{
    name1='aha'
    constructor(name2=1){
        this.name2 = name2
    }
    call(){
        // console.log('打电话');
        return "哈哈"
    }
    turnName(){
        return this.name2;
    }
}
class SmartPhone extends Phone{
    constructor(name2,brand){
        super(name2)
        this.brand=brand
    }
    // 可以重写父类的方法
    call(){
        console.log(`子类${super.call()}`);
    }
    turnName(){
        console.log(`子类${super.turnName()}`); //父类turnName里的this 此时指向子类的实例 因此name2变成了实例化时传入的值
    }
}
const phone1 = new Phone('222')
const phone2 = new Phone('22222')
console.log(phone1.name1);
console.log(phone1.name2);

console.log(Phone.prototype.constructor === Phone); //类原型的构造函数指向类本身
console.log(phone2._proto_ === phone1._proto_); //1和2的原型都指向Phone的原型 二者相等
console.log(phone1);

const sp = new SmartPhone('kkk','小米')
sp.call()
sp.turnName() //子类kkk 而不是子类1
