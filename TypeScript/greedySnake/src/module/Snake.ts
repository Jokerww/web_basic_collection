export default class Snake{
    // 蛇元素  蛇头的元素 蛇整个身体的元素（包括头）
    snakeEle:HTMLElement; //父元素 snake
    snakeHead:HTMLElement; //蛇头
    snakeBody:HTMLCollection; //蛇的身体 一节一节的 div元素集合

    constructor(){
        this.snakeEle = document.getElementById('snake') as HTMLElement;
        this.snakeHead = document.querySelector('#snake>div')!;
        this.snakeBody = this.snakeEle.getElementsByTagName('div');
    }

    // 获取和设置蛇头的位置
    get X(){
        return this.snakeHead.offsetLeft;
    }
    set X(value:number){
        this.snakeHead.style.left = value + '';
    }
    get Y(){
        return this.snakeHead.offsetTop;
    }
    set Y(value:number){
        this.snakeHead.style.top = value + '';
    }


    // 蛇吃到食物后身体增加一节
    addBody(){
        this.snakeEle.insertAdjacentHTML("beforeend","<div></div>"); //在snake div元素里面的最后面添加一个div
    }

}