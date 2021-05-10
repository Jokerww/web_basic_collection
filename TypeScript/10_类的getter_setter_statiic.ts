// 类的getter setter 和 static
// getter于其说是方法 其实更像是属性 get修饰的方法来操作私有属性 并在类的外部获取

class Girl22{
    constructor(private _age:number){

    }
    get age(){
        return this._age + 10
    }
    set age(age:number){ //setter不能返回值
         this._age = age + 15
    }
    static name1 = 'xiaoming'
}

const girl22 = new Girl22(20)
girl22.age = 30 //此处修改age便调用了setter 在settter里的_age变成了45 通过getter返回给外部又加了一层 变成了55
console.log(girl22.age) //操作了私有属性并返回
console.log(Girl22.name1) //static静态属性允许不创建实例便可直接调用