/*使用import()方法 动态按需导入
以前的导入模块都是在顶部全部导入 问题是有的操作可能用不到一些导入的模块
就会浪费资源和事件 
https://www.jianshu.com/p/386916c73dad
import()可以实现动态按需导入 
 import("./specifier.js"); // 返回一个promise 利用then处理
 */