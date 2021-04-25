//  node 中的js具有读取文件的能力 但是浏览器中的js没有
//  fs 是file-system的简写 在node中读取文件需要引入fs模块
// 在fs模块中提供了文件操作相关的额api

// 使用require方法加载fs模块
/* fs.readfile的使用方法 异步方法
fs.readfile(path,function(err,data){})
    当文件读取成功时  data为读取到的数据 通过data.toString()展现原文 err为null
    当文件读取失败时 data为null err为错误对象

*/
import fs from 'fs'

fs.readFile('./readme.txt',function(err,data){
    console.log(data.toString())
})
console.log('发起读取文件完成')
