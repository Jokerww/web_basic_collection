const arr = [1,2,1,3,4,2,5,4,6,5]
// 1, Set
const re = new Set(arr)
// console.log(Array(re)) //[ Set { 1, 2, 3, 4, 5, 6 } ]
console.log(Array.from(re)) //[ 1, 2, 3, 4, 5, 6 ]

// 2,indexOf 和新增一个空间
let re2 = []
arr.forEach(item =>{
    if (re2.indexOf(item) === -1) {
        re2.push(item)
    }
    return;
})
console.log(re2)