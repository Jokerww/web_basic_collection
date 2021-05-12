import {hi} from './m1'

function sum(a:number,b:number):number{
    return a+b
}
console.log(sum(123,456));
console.log('哈哈哈');
console.log(hi);
let sum2 = (a:number,b:number):number=>a+b ;//怎么箭头函数还不会写了？？
sum2(12,23)