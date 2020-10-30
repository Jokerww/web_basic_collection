var a = [1,2,3,1,4,1,7,5,9,4,4,2,2]
function MostNum(arr){
    var me;
    var mn = 1;
    var ob = arr.reduce((obj,item)=>{
        obj[item]?obj[item]++ :obj[item]=1;
        if(obj[item]>mn){
            me = item;
            mn++;
        }
        return obj
    },{})
    var m = 0
    var ml = []
   for(var key in ob){
        ob[key]>=m? m=ob[key] : m;
   }
   for(var key1 in ob){
       ob[key1]==m? ml.push(key1):ml
   }
   var res = arr
   ml.forEach(item=>{
    res = res.filter(item1 => item1 != item)
   })
   console.log(res)
}
MostNum(a)