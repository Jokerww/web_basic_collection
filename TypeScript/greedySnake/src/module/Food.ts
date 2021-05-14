// 万物皆对象 啥啥都定义成类 
// 定义食物类
export default class Food{
    // 定义一个属性表示食物对应的元素
    element:HTMLElement
    constructor(){
        this.element = document.getElementById('food')!; //!表示我知道这个元素肯定不为空 你别提醒了
    }

    // 定义获取食物坐标的方法 当蛇头的x与Y和食物重合时 做判断
    get X(){ //获取X坐标
        return this.element.offsetLeft;
    }
    get Y(){//获取Y坐标
        return this.element.offsetTop;
    }

    // 蛇与食物重合时 蛇改变位置
    changePosition(){
        // 位置随机 蛇每次移动10px 食物的位置需要时10的整数 让食物不出界
        let left = Math.round(Math.random()*29)*10; //0-29的整数乘以10
        let top = Math.round(Math.random()*29)*10; //0-29的整数乘以10
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
