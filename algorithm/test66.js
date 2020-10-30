function subString1(str,start,nums){
    if(nums==0) return''
    str_list = str.split('')
    var len = 0
    var res = ''
    for(let i=start;i<str.length;i++){
        if(len<nums){
            len = str_list[i].charCodeAt(0)>255 ? len+2:len+1;
            res = res+str_list[i]
        }else{
            break
        }  
    }
    return res
}
let str = 'abc这是一个abc示例字符串'
let re = subString1(str,3,11)
console.log(re)