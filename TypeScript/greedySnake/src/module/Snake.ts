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
    // 设置蛇头的位置时 蛇可能会出界 撞墙  倾向于谁出了问题就谁来解决
    // 既然是蛇出了问题 那就再蛇这个类里来解决
    set X(value:number){
        if(this.X == value) return;  //值没改变就啥也不干
        if(value<0 || value > 290) throw new Error('蛇撞墙了'); //抛出异常 游戏停止 在调用的地方处理异常
        // 禁止掉头 检测头的位置和它后一节的位置是不是相同 同时需要判断后一节存不存在
        if((this.snakeBody[1] as HTMLElement)?.offsetLeft === value ){
            // 如果发生了掉头则需要反方向移动
            if(value >this.X){ //正在向右移动掉头 让它左移
                value = this.X - 10 ;
            }else{
                value = this.X +10;
            }
        }


        this.moveBody()//移动后面的 在移动前面的
        //这个value是要赋给x的值 而不是越加越多的值
        this.snakeHead.style.left =  value + 'px';
        // 检查是否撞到自己
        this.checkHeadBody()
    }
    get Y(){
        return this.snakeHead.offsetTop;
    }
    set Y(value:number){
        if(this.Y == value) return;  //值没改变就啥也不干
        if(value<0 || value > 290) throw new Error('蛇撞墙了'); //抛出异常 游戏停止 在调用的地方处理异常
         // 禁止掉头 检测头的位置和它后一节的位置是不是相同 同时需要判断后一节存不存在
         if((this.snakeBody[1] as HTMLElement)?.offsetTop === value ){
            // 如果发生了掉头则需要反方向移动
            if(value >this.Y){ //正在向右移动掉头 让它左移
                value = this.Y- 10 ;
            }else{
                value = this.Y +10;
            }
        }
        this.moveBody() //移动后面的 在移动前面的
        this.snakeHead.style.top =  value + 'px';
        // 检查是否撞到自己
        this.checkHeadBody()
    }


    // 蛇吃到食物后身体增加一节
    addBody(){
        this.snakeEle.insertAdjacentHTML("beforeend","<div></div>"); //在snake div元素里面的最后面添加一个div
    }

    // 设置蛇身体的移动
    moveBody(){ //这个函数随着蛇头坐标的更改而更改
        // 移动身体就是蛇后一节的位置挪到前一节的位置 这样设就可以往前走了 
        for(let i = this.snakeBody.length-1 ; i>0;i--){
            // 获取前一节的坐标
            let beforX = (this.snakeBody[i-1] as HTMLElement).offsetLeft;
            let beforY = (this.snakeBody[i-1] as HTMLElement).offsetTop;
            // 将前一节的坐标赋值给当前节
            (this.snakeBody[i] as HTMLElement).style.left = beforX + 'px';
            (this.snakeBody[i] as HTMLElement).style.top = beforY + 'px';
        }
    }

    // 检查蛇是否撞到自己
    checkHeadBody(){
        // 获取所有的身体 检查他们是否与蛇头的位置重叠
        for(let i=1;i<this.snakeBody.length;i++){
            let bd = this.snakeBody[i] as HTMLElement
            if(this.X == bd.offsetLeft && this.Y == bd.offsetTop){
                throw new Error('撞到自己了！')
            }
        }
    }

}