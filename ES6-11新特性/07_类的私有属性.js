/* 
#
*/
class Phone{
    #fun = '打游戏' //私有属性 只能在类的呢不用
    static #callone = '给谁打电话' //静态内部属性 
    constructor(price,brand){
        this.price = price;
        this.brand = brand;
        // this.#fun = '打游戏' 这里是定义实例属性 不能定义私有属性和静态属性
    } 
    call = ()=>console.log('打电话');
    getFUn = ()=>console.log(this.#fun);
    static #guide = ()=>console.log('导航');
}
const xiaomi = new Phone(1999,'小米')
console.log(xiaomi.brand);
// console.log(xiaomi.#fun); 用不了
xiaomi.getFUn()