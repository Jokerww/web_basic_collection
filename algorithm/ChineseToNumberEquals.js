var chnNumChar = {
    零:0,
    壹:1,
    贰:2,
    叁:3,
    肆:4,
    伍:5,
    陆:6,
    柒:7,
    捌:8,
    玖:9
};

var chnNameValue = {
    拾:{value:10, secUnit:false},
    // 百:{value:100, secUnit:false},
    // 千:{value:1000, secUnit:false},
    // 万:{value:10000, secUnit:true},
    // 亿:{value:100000000, secUnit:true}
}

function ChineseToNumber(chnStr){
    var rtn = 0;
    var section = 0;
    var number = 0;
    var secUnit = false;
    var str = chnStr.split('');

    for(var i = 0; i < str.length; i++){
        var num = chnNumChar[str[i]];
        if(typeof num !== 'undefined'){
            number = num;
            if(i === str.length - 1){
                section += number;
            }
        }else{
            var unit = chnNameValue[str[i]].value;
            secUnit = chnNameValue[str[i]].secUnit;
            if(secUnit){
                section = (section + number) * unit;
                rtn += section;
                section = 0;
            }else{
                section += (number * unit);
            }
            number = 0;
        }
    }
    return rtn + section;
}

// console.log(ChineseToNumber('壹'));

const str = '壹加贰拾贰减叁拾捌加捌拾玖'
let str1 = []
let str3 = str.split('加');
console.log(str3)
str3.forEach(item=>{
    if(item.indexOf('减') == -1){
        let num = ChineseToNumber(item)
        str1.push(num)
    }else{
        let itemNum = item.split('减').map(item1=>ChineseToNumber(item1));
        // console.log(itemNum)
        let num1 = itemNum.reduce((pre,n)=>pre-n,2*itemNum[0]);
        // console.log(num1)
        // console.log(str1)
        str1.push(num1)
    }  
})
let res = str1.reduce((pre,item3)=>pre+item3,0)
console.log(res)