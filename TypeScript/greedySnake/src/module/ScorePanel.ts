export default class ScorePanel{
    score:number = 0; //初始化参数
    level:number = 1; 
    // 拿到装分数的span 以在界面上显示
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    // 增加可维护的灵活变量
    maxLevel:number; //最大的等级限制
    upLevelScore:number; //多少分可以升级

    constructor(maxLevel:number=10,upLevelScore:number=10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upLevelScore = upLevelScore;
    }

    // 加分的函数 
    addScore(){
        this.scoreEle.innerHTML = ++this.score + ''; //++放前面是先加再赋值
        //但分数增加到一定的值 就提升其等级
        if(this.score%this.upLevelScore === 0){ //分数增加到可以加等级的时候 就调用升级函数
            this.levelUp()
        }
    }

    // 提升等级的函数 等级越高速度越快
    levelUp(){
        // 等级不能无限提升
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}