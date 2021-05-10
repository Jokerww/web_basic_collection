/* 
enum类型是对JavaScript标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字
默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
*/

// enum Color{red,blue,green}
// console.log(Color[0]);
// 手动指定编号
enum Color{red=1,blue=3,green=6}
console.log(Color[3]);