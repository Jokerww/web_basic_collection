import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

export default class GameControl{

    // 拿到三个模块
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    // 记录蛇行走的方向
    direction:string = '';

    constructor(){
        this.snake = new Snake;
        this.food = new Food;
        this.scorePanel = new ScorePanel;
    }

    // 初始化游戏
    init(){
        // 绑定键盘事件  
        document.addEventListener('keydown',this.keyDownHandler.bind(this)) //在构造函数里绑定最好了
    }

    // 键盘按下后要做的事情
    keyDownHandler(event:KeyboardEvent){ //此处用箭头函数 上边就不用绑定了
        this.direction = event.key 
        console.log(this.direction);
    }
}