let arr1=[1,2,3,4,5,6]
let sum1 = arr1.reduce((prev,item,index)=>{
    console.log(item,index)
    prev +=item
    return prev
})
console.log(sum1)