/* 
enum类型是对JavaScript标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字 
默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：


    通常的用法是 一个变量在一个固定范围内取值 这个范围内取啥都行 但你又不知道他到底是啥值 此时就可以用enum表示这个取值范围
    比如性别 0表示男 1表示女 但是你只知道他是0还是1 你不知道0或者1 到底是男还是女 你就可以用enum给0和1取别名 再去使用 就会方便很多
*/

// enum Color{red,blue,green}
// console.log(Color[0]);
// 手动指定编号
enum Color{red=1,blue=3,green=6}
console.log(Color[3]);

enum Gender{
    male=0,
    female = 1
}
//枚举里边的值和别名是等价的 可以利用一个取到另一个 
// 来了一个gender变量取值是0或者1  你想判断他是不是男 但你又不知道到底是0还是1表示男 那你就直接gender.male
// if(gender === Gender.male){console.log("他是男的")}  就不用纠结gender===0/1?
console.log(Gender.male); //0 
console.log(Gender[0]); //male  

// 类型别名 用来给繁琐的类型取一个别名 便于重复利用
type numscape=1|2|3|4|5 //给取值范围为1，2，3，4，5的变量取了个别名
let num1:numscape;
num1 = 1
num1=5
// num1=7 //报错了