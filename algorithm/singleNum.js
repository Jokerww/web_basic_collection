const arr = [1,2,1,3,4,2,5,4,6,5]
// indexOf 和 lastIndexOf
let re = []
arr.forEach(item =>{
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
        re.push(item)
    }
    return;
})
console.log(re)

const set1 = new Set(arr)
// set的迭代
// for(item of set1){
//     console.log(item)
// }
const map1 = new Map()
// map中添加值用set
map1.set('a',11)
map1.set('b',22) // Map { 'a' => 11, 'b' => 22 }
console.log(Array.from(map1)) //[ [ 'a', 11 ], [ 'b', 22 ] ]
const obj = Array.from(map1).reduce((obj,[key,value])=>{
    obj[key] = value
    return obj
},{})
console.log(obj)
console.log([...map1.entries()])//实现了Array.from()的效果
// map的迭代
console.log([...map1.keys()])
console.log([...map1.values()])
console.log([...map1.entries()])
console.log('----------------------')
map1.forEach((value,key,map1)=>{
    console.log(key,value,map1)
})
