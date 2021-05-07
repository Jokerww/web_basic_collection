/* 
ES6 模块化暴露采用 export 语句  默认暴露export default 一个文件模块只能有一个默认暴露

模块的引入：
    1，全部引入 import * as 'name' from 'file'
    2,解构引用 import {n1,n2} from 'file'  重命名 import {n1 as n11,n2} from 'file' 名字得跟暴露的名字相同
    3,默认暴露的引入 import {n} from 'file'  import {default as n} from 'file' 
    4，在一个index文件里全部引用  再在项目里应用index文件


*/