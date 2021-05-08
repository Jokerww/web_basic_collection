// Set的基本方法和应用
let set1 = new Set(['red','blue']);

// 增加数据 add()
set1.add('green');

// 删除数据delete()
set1.delete('red');

//获取长度size
console.log(set1.size);

// 判断是否有数据has()
console.log(set1.has('blue'));

// entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
// 迭代对象中数组的索引值作为 key， 数组元素作为 value。
console.log(set1.entries());

// 遍历for...of... forEach
for (const v of set1) {
    console.log(v);
}
set1.forEach(v=>console.log(v))

// keys()和values()
console.log(set1.keys());
console.log(set1.values());
// 清空set clear()
set1.clear()
console.log(set1);

// Set 的应用  数组的去重 交集 并集 差集
let arr = [1,1,2,3,4,5,7,4,6,3,4];
let arr2 = [1,1,3,5,8,9,0];
// 去重
let res1 = [...new Set(arr)];
console.log(res1);
//交集 求集合前先去重 便于计算
//利用filter和has筛选出相同的数据
let overlap = [...new Set(arr)].filter(item=>new Set(arr2).has(item));
console.log(overlap);
// 并集
console.log([...new Set([...arr,...arr2])]);
// 差集 求并集的逆运算 对象不同 结果不同
let diff = [...new Set(arr)].filter(item=>!(new Set(arr2).has(item)));
console.log(diff);



// map的方法和应用
let map = new Map();
// 增加数据set()
map.set('key1','value1');
map.set('key2','value2');
map.set('key3','value3');
// 修改数据set()
map.set('key1','value11')
// 删除数据delete()
map.delete('key2')
// 长度size
console.log(map.size);
// 获取键名对应的值get()
console.log(map.get('key1'));
// 是否有某个键 has()
console.log(map.has('key3'));
// 清空clear()
// map.clear()
// entries()
console.log(map.entries());
// keys()和values()
console.log(map.keys());
console.log(map.values());
console.log(map);

// map遍历 for..of..   forEach
for (const item of map) {
    console.log(item); //直接返回的是map.entries()对象里的值
}
for (const [key,value] of map) { //此处的map 和map.entries()结果一样
    console.log(key,value); //分别返回键和值
}
map.forEach(item=>console.log(item)) //直接返回属性值
map.forEach((value,key)=>console.log(key,value)) //分别返回键和值 注意值在前面 键在后面
console.log(...map); //啊哈~  可以扩展耶
const map111 =[...map]
console.log(map111);