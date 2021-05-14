import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

export default class GameControl{

    // 拿到三个模块
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    // 记录蛇行走的方向
    direction:string = 'Right';
    // 判断蛇是否还活着
    isLive:boolean = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        // 创建了实例就调用初始化函数 开始游戏
        this.init()
    }

    // 初始化游戏
    init(){
        // 绑定键盘事件  
        document.addEventListener('keydown',this.keyDownHandler.bind(this)) //在构造函数里绑定最好了
        this.run() 
    }

    // 键盘按下后要做的事情
    keyDownHandler(event:KeyboardEvent){ //此处用箭头函数 上边就不用绑定了
        this.direction = event.key 
        // console.log(this.direction);
    }

    // 蛇移动的函数
    run(){
        // 先获取蛇头的位置
        let headX = this.snake.X;
        let headY = this.snake.Y;
        // console.log(this.direction);

        // 根据键盘按下的键 来设置蛇头的移动
        switch(this.direction){
            case "ArrowUp": //向上top减小
            case "Up":
                headY -= 10;
                break;
            case "ArrowDown": //向下top增大
            case "Down":
                headY += 10;
                break;
            case "ArrowLeft": //向左left减小
            case "Left":
                headX -= 10;
                break;
            case "ArrowRight": //向右left增大
            case "Right":
                headX += 10;
                // console.log(headX); 这里输出了
                break;
        }
        // 游戏可能停止之前完成食物监测
        this.checkFood(headX,headY) //传入蛇头的坐标
        // 然后更改蛇头的位置 通过setter修改的
        // 蛇此时可能会撞墙 处理异常 并终止游戏
        try {
            this.snake.X = headX;
            this.snake.Y = headY;
        } catch (e) {
            alert(e.message + "GAME OVER")
            // 停止游戏 不然关掉弹窗后游戏还会继续 持续报错
            this.isLive = false;
        }
        
       

        // 让蛇活着的情况下一直动
       let speed:number = 300-(this.scorePanel.level-1)*30; //设置速度 间隔时间越小 速度就越快
        this.isLive && setTimeout(this.run.bind(this),speed)
    } 

    // 蛇吃到食物后该做的 涉及到蛇类 和食物类
    checkFood(X:number,Y:number){
        if (X === this.food.X && Y === this.food.Y) { //若蛇头的坐标与食物坐标重合
            // 食物改变位置
            this.food.changePosition();
            // score加一分
            this.scorePanel.addScore()
            // 蛇身体加一节
            this.snake.addBody();           
        }
    }
}