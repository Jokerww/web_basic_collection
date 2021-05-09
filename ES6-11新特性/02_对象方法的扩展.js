/* 
1，属性的简洁表示法：允许在大括号里面，直接写入变量和函数，作为对象的属性和方法
2，属性名表达式：允许字面量{}定义对象时，表达式作为对象的属性名，即把表达式放在方括号内，但不能与简洁表达式同时使用。
             当对象用作属性名表达式时，对象会被转化成[Object object] 从而会被之前的对象属性名覆盖
3，方法的 name 属性：函数的name属性，返回函数名。对象方法也是函数，因此也有name属性
                有两种特殊情况：bind方法创造的函数，name属性返回bound加上原函数的名字；
                                Function构造函数创造的函数，name属性返回anonymous。
                如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述
4，属性的可枚举性：对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。
                        Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象，
                        描述对象中的的enumerable属性，称为“可枚举性”，如果该属性为false，就表示某些操作会忽略当前属性
                        有四个操作会忽略enumerable为false的属性。
                            for...in循环：只遍历对象自身的和继承的可枚举的属性。
                            Object.keys()：返回对象自身的所有可枚举的属性的键名。
                            JSON.stringify()：只串行化对象自身的可枚举的属性。
                            Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
                        所有 Class 的原型的方法都是不可枚举的，尽量不要用for...in循环，而用Object.keys()代替。
5，属性的遍历： （1）for...in
                    for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
               （2）Object.keys(obj)
                    Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名 
               （3）Object.getOwnPropertyNames(obj)
                    Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
               （4）Object.getOwnPropertySymbols(obj)
                    Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
               （5）Reflect.ownKeys(obj)
                    Reflect.ownKeys返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
                遍历规则：
                    首先遍历所有数值键，按照数值升序排列。
                    其次遍历所有字符串键，按照加入时间升序排列。
                    最后遍历所有 Symbol 键，按照加入时间升序排列。
5，super 关键字：this关键字总是指向函数所在的当前对象，另一个类似的关键字super，指向当前对象的原型对象。
                super关键字表示原型对象时，只能用在对象的方法的简写法foo(){}之中，用在其他地方都会报错
                对象继承/原型方法中的 this 在子对象中调用该方法时 指向的是子对象
6，对象的扩展运算符：（1）对象的解构赋值 解构赋值只能是最后一个参数解构赋值 且等号右边需为对象
                    （2）对象的解构赋值为浅拷贝 即如果一个键的值是复合类型的值（数组、对象、函数），
                         那么解构赋值拷贝的是这个值的引用，而不是这个值的副本  
                         因此在改变赋值后的引用变量值时 源对象相应的值也会被改变
                    （3） 扩展运算符的解构赋值，不能复制继承自原型对象的属性。
                    （4）扩展运算符后面必须是一个变量名，而不能是一个解构赋值表达式 
                        对象的扩展运算符可以用于数组、字符串
                    （5） 解构赋值的一个用处，是扩展某个函数的参数，引入其他操作。
7，链判断运算符：如果读取对象内部的某个属性，往往需要判断一下该对象是否存在，不判断会出错
                三元运算符?:也常用于判断对象是否存在。
                这样的层层判断非常麻烦，因此引入了“链判断运算符” ?. 用于简化判断的写法。
                也可用于判断对象方法是否存在，如果存在就立即执行的例子iterator.return?.() 对于那些可能没有实现的方法，这个运算符尤其有用。
                链判断运算符有三种用法。
                    obj?.prop // 对象属性
                    obj?.[expr] // 同上
                    func?.(...args) // 函数或对象方法的调用
                （1）短路机制 ?.运算符相当于一种短路机制，只要不满足条件，就不再往下执行
                        判断?左侧的表达式是否为null或者undefined 若为真 则右侧表达式不再执行
                （2） delete 运算符 delete a?.b  等同于 a == null ? undefined : delete a.b
                （3）如果属性链有圆括号，链判断运算符对圆括号外部没有影响，只对圆括号内部有影响
8，Null 判断运算符?? : 读取对象属性的时候，如果某个属性的值是null或undefined，有时候需要为它们指定默认值。
                        常见做法是通过||运算符指定默认值。 const a = response.a||"Hello"
                        ||的弊端在于 如果属性的值如果为空字符串或false或0，默认值也会生效
                        ?? 只有在左侧属性值为null或undefined时 默认值才会生效
                        这个运算符的一个目的，就是跟链判断运算符?.配合使用，为null或undefined的值设置默认值。
                        短路运算符：
                            a&&b  a为真则返回b  a为假则返回a   通常a为b是否执行的判断条件 
                            a||b  a为真则返回a  a为假则返回b   通常用于判断a是否存在 b为迫不得已的默认值
                            a?.b  a为真则确定b是否为真 都为真则返回a.b(b通常为a的属性 或方法a的调用 a?.())
                            a?.b??c 当a或b任意一个为假是  将默认值设为c
9,Object.is(): 用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
                == 存在自动转换数据类型问题
                === 存在 NaN不等于自身，以及+0等于-0 问题
10，Object.assign():Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
                    如果该参数不是对象，则会先转成对象，然后返回
                    由于undefined和null无法转成对象，所以如果它们作为参数，就会报错
                    属性名为 Symbol 值的属性，也会被Object.assign()拷贝。
                    注意点：
                        浅拷贝、同名属性替换、数组的合并数组会被当成对象处理、
                        Object.assign()只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制
11，Object.getOwnPropertyDescriptors()：Object.getOwnPropertyDescriptors()方法，返回指定对象所有自身属性（非继承属性）的描述对象
                            该方法的引入目的，主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题
                            Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
12，__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
                __proto__属性（前后各两个下划线），用来读取或设置当前对象的原型对象（prototype）
                Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的原型对象（prototype），返回参数对象本身
                该方法与Object.setPrototypeOf方法配套，用于读取一个对象的原型对象
13，Object.keys()，Object.values()，Object.entries()
    对于一般的数组 直接用arr.keys()...就可以  map也可以直接用   返回的是可迭代对象
    对于对象 
        Object.keys()方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
        Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
            如果Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组
        Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
            常用于将对象转换成map

14，Object.fromEntries()： Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
    该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。
*/

// 属性的简洁表示法
const foo = 'foo1'
const foo2 = 'foo2'
console.log({foo,foo2}); //{foo:'foo1',foo2:'foo2'}
// 属性名表达式
const obj1 = {
    ['a'+'b'+'c']:'abc1',
    foo,//可行 但不能[foo]
    // [function(){console.log(0);}]:function(){} ,//不太行
    name2(){},
    [Symbol('obj11')]:'symbol'
}
console.log(obj1);
// 方法的 name 属性
function Name1(){}
console.log(Name1.name,obj1.name2.name);
console.log(Name1.bind().name); //bound name1
console.log(Function().name); //anonymous
// 属性的可枚举性和遍历  没有设置非枚举属性 因此都是可枚举
for (const key in obj1) {
     console.log(key); //没有symbol
}
console.log(Object.keys(obj1));//没有symbol
console.log(Object.getOwnPropertyNames(obj1));// 同上
console.log(Object.getOwnPropertySymbols(obj1)); //只拿到了symbol('obj11')
console.log(Reflect.ownKeys(obj1)); //拿到了所有属性 

// super 关键字
const proObj = {
    age:18,
    color:'red',
    hubby:'ski',
    getColor(){return this.color}
}
const obj2 = {
    height:180,
    color:'blue',
    hasColor(){
        return super.getColor()
    }
}
Object.setPrototypeOf(obj2,proObj)
console.log(Object.getPrototypeOf(obj2)); //proObj对象
console.log(obj2.hasColor()); //blue  子方法中调用原型的方法 原型方法的this指向子方法的环境对象
// 对象的扩展运算符
const{age,color,...subproObj}=proObj
console.log(age,color,subproObj);//subproObj里包含了其他的参数
console.log({...subproObj});
console.log(...'hello'); //把字符串拆成了一个一个的字符
console.log(...[1,2,3]); //同上
// 链判断运算符  弥补||的关于false 0赋值错误的缺陷
const v1 = 3<2 || '小于'
const v2 = 3<2 && '大于'
console.log(v1,v2);
// Null 判断运算符 用于配和链判断运算符赋值

// Object.is()
console.log(Object.is(NaN,NaN));
console.log(Object.is(+0,-0));
// Object.assign()
// Object.getOwnPropertyDescriptors()
// __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
// Object.keys()，Object.values()，Object.entries()
const mapObj = {a:'1',b:'2',c:'3',d:'4'}
console.log(new Map(Object.entries(mapObj))); //直接变成了map 不用set一个个的赋值
// Object.fromEntries()
console.log(Object.fromEntries(new Map(Object.entries(mapObj)))); //又变成了对象