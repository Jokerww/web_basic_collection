var str_list = ['abc','123456789']
// while(str = realdine()){
//     str_list.push(str)
// }
String.prototype.repeatify=function(n = 1){
    let result = ''
    for (let i = 0; i < n; i++){
      result += this
    }
    return result
  }
var res=[]
str_list.forEach(item=>{
    var len = item.length
    if(len<=8) return res.push(item+'0'.repeatify(8-len));
    var item_list = []
    while(len>8){
        var sub_item = item.substr(0,8);
        item_list.push(sub_item);
        item = item.replace(sub_item,'')
        len = item.length
    }
    item_list.push(item+'0'.repeatify(8-len))
    res = [...res,...item_list]
})
console.log(res)