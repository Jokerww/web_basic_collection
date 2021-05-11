/* 
类及类成员的修饰符：
        public：类内部 子类内部 实例 均可用
        protected: 类内部 子类内部  可用
        private:  类内部可用

        static: 类及其子类本身调用 class.staticProp

        abstract:抽象类  抽象类不能被实例化 必须由子类继承 
                抽象类成员不能被直接访问 且其子类必须实现其抽象类成员

*/

//类的继承 实现 与重写
class Girl{
    content:String = '你好呀，我是父类的属性'
    sayHello(){
        return '父类的 你好呀'
    }
}
// 继承自父类
// class Littlegirl extends Girl {
//     sayLove(){
//         return '字类的 我i爱你呀'
//     }
// }
// 父类方法的改写 1：直接重写
// class Littlegirl extends Girl {
//     sayLove(){
//         return '字类的 我i爱你呀'
//     }
//     sayHello(){
//         return '字类改写之后的 你好呀'
//     }
// }

//父类方法的改写2：使用后的改写
// 继承自父类
class Littlegirl extends Girl {
    sayLove(){
        return '字类的 我i爱你呀'
    }
    sayHello(){
        return super.sayHello()+'字类的改写2' //super指向父类对象 用来调用父类的属性和方法
    }
}
const girl1 = new Littlegirl()
console.log(girl1.sayLove())
console.log(girl1.sayHello())