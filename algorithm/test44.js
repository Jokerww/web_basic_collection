let E = 10
taskList = [[1,2,3,1],[2,1,5,2],[3,20,7,6],[4,5,2,2]]
let timelist = []
taskList.forEach(item=>{
    let [I,P,B,T] = item
    let len = timelist.length
    console.log(len)
    let Bmax = timelist[len-1]? timelist[len-1][2]:0
    let Tmax = timelist[len-1] ? timelist[len-1][3]:0
    let time = timelist.reduce((pre,item1)=>{
        pre = pre + item1[2]+item1[3]
    },0)
    if(B>Bmax+Tmax && B+Bmax+Tmax<=E){
        timelist.push(item)
    }
})
console.log(timelist)