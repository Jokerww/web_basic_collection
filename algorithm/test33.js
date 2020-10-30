function circleSort(m,n,arr){
    let matrix =[]
    for(let i=0;i<m;i++) matrix[i]=[]
    console.log(matrix)
    let top = 0,bottom = m-1,left =0,right=n-1
    let count = 0
    while(count < m*n){
        for(let i=left;i<=right;i++)
            matrix[top][i]= arr[count++]
        top++

        for(let i=top;i<=bottom;i++)
            matrix[i][right] = arr[count++]
        right--
        
        for(let i = right;i>=left;i--)
            matrix[bottom][i]=arr[count++]
        bottom--
        
        for(let i = bottom;i>=top;i--)
            matrix[i][left]=arr[count++]
        left++
        
    }
    return matrix
}

let arr = [1,2,3,4,7,9,0,4,5]
arr.sort((a,b)=>a-b)
console.log(circleSort(3,3,arr))
// let lines = readline()
// let [m,n] = lines.split(' ').map(item=>Number(item))
// let arr1 = []
// for(let i=0;i < m;i++){
//     let line = readline()
//     let linelist = line.split(' ').map(item1=>Number(item1))
//     arr1 = [...arr1,...linelist]
// }
// arr1.sort((a,b)=>a-b)
// let res = circleSort(m,n,arr1)
// res.forEach(item1=>{
//     let a = item1.join(' ')
//     console.log(a)
// })