// JS函数在参数传递的时候并不在乎传递的参数多少和类型
// 因为在内部全部都是用一个arguements对象接受 可以直接访问arguements对象来得到传过来的参数

function Argu(){
    console.log(arguments.length)
    console.log(arguments[0],arguments[1],arguments[2])
    console.log( arguments );
}
Argu(0,1,1,1,1,1)