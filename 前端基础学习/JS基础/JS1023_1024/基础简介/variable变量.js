// 变量是一块内存空间 用于存储数据 是一个容器
//变量的使用有两个步骤：声明、赋值  二者可同时完成
 // JS里所有的变量都用关键字 var 来声明 用 = 来赋值
 // 变量的命名采用下划线式  函数命名使用驼峰式
 // 不要用关键字和保留字给变量取名字 name这个单词虽然不是关键字和空字符 但在很多浏览器里有特殊意义最好也别用！！！
 // A-Z a-z  0-9 _ $ 都可以命名变量 不能以数字开头 不能有空格
 
 // 变量在赋值时会根据赋值自动给与它相应的数据类型如下my_name是字符串，age是数值 还有布尔型
 var my_name ="wulijaio", age=18;
 
/*以上的代码等价于：
var my_name;
var age;
my_name="wulijiao"
age=18

也等价于：
var my_name="wulijao"; var age=18;
*/

/*数组的创建：var persons = Array(mun) mun代表数组里边元素的个数 可定义也可不定义
	            或 var persons=[]  
				数组的值可以是各种数据类型 包括另外的数组或对象
*/
// var persons=Array(4)  
var persons=[]; 
var dudu=["haha",20,30];
persons[0]="haha";
persons[1]=20;
alert(persons)
alert(dudu)

/* 对象的创建采用键值对（类似于python中的字典） 利用对象名.属性名 来引用 
创建方法：var xiaomin=Object() 或 var xiaomim={}
值可以是各种数据类型
*/
var cat={name:"小花", weight:23, color:"orange"};
cat.size = 500;
alert(cat.name)
alert(cat.size);


/* 操作符：加+ 减- 乘* 除/ 加一++  +还可用于字符串或字符串与数字的拼接 */
/* 条件语句if  语法： 
if(condition){
	statements; 
 }
 
 if...else 语法：
 if(cindition){
	 statements
 }else{
	 statements
 }
比较操作符：大于等于>=  小于等于<=  大于>  小于< 
   等于==（比较严格的表示方法为（==）） 不等于！= （比较严格的为 ！==）
   
逻辑操作符：与&&  或|| 非！
   */
  
/* 循环：
 while（condition）{statements;}
 do{statements}while(condition)
 for(初始条件，测试条件，终止条件){statement；}
 */ 

/* 函数：
function 函数名(){
	statements;
	} 
局部变量需要在函数内 用 var声明	
不管与全局变量重名与否 在函数内声明了就是局部变量 不会改变全局变量的值
否则就会改变全局变量的值
*/