//ts中如果不能自动解析出变量的类型 则需要添加变量的类型注解
let count1 = 2;//能自动解析出count1是number类型

// 对函数的参数和返回值有类型要求
// 1,单独传参 给参数添加类型 返回值有类型要求
function func1(num1:number,num2:number):number{
    return num1+num2;
}
const func11 = func1(1,2);// 能识别func11的类型 避免函数实现过程中出现的失误

// 2，单独传参，不需要返回值
function func2(num1:number,num2:number):void{
    console.log(num1+num2)
    // return "" 写了return就报错 因为void不需要传参
}

// 3，单独传参 返回值为never 表示函数执行不完（抛出一场或陷入死循环）
function func3(num1:number,num2:number):never{
    throw new Error
    console.log(num1+num2) 
}
function func4(num1:number,num2:number):never{
    while(true){}
    console.log(num1+num2) 
}

//4，对象传参 对返回值有要求 需要整体的对对象定义类型 不能直接在形参里边给参数定义类型
//因为是对象 ：表示赋值 直接定义类型的话 会将类型当成变量值直接赋值给形参
function func5({num1,num2}:{num1:number,num2:number}):number{
    return num1+num2
}
const func55 = func5({num1:1,num2:2})//此时 便是正确的赋值方法