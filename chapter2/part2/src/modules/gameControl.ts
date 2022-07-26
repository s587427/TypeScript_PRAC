import Food from './food'
import Snake from './snake'
import Scoreboard from './scoreboard'

export default class GameControl {
    food: Food;
    scoreboard: Scoreboard;
    snake: Snake;
    runDirection: string;
    isLive = true;
    constructor(runDirection: string = 'ArrowRight') {

        this.food = new Food();
        this.scoreboard = new Scoreboard(10, 2);
        this.snake = new Snake();
        this.runDirection = runDirection;

        //延遲一秒再開始
        setTimeout(() => this.init(), 1000)
    }
    
    checkEat(x: number, y: number){
        if (x === this.food.x && y === this.food.y) {
            this.food.changePostion();
            this.scoreboard.addScore();
            this.snake.growUp();
        }
    }

    run() {

        //獲取蛇頭的座標
        let x = this.snake.x;
        let y = this.snake.y;

        console.log(this.runDirection)

        //蛇移動方向
        switch (this.runDirection) {
            case 'ArrowRight':
                x += 10;
                break;
            case 'ArrowLeft':
                x -= 10;
                break;
            case 'ArrowUp':
                y -= 10;
                break;
            case 'ArrowDown':
                y += 10;
                break;
        }

        
        //檢查蛇吃到食物
        this.checkEat(x, y)
     
        //改變蛇頭座標
        try {
            this.snake.x = x;
            this.snake.y = y;
        } catch (e: any) {
            console.log(e.message + 'Game Over!');
            alert(e.message + 'Game Over!');
            this.isLive = false;
        }

        //蛇重複跑
        this.isLive && setTimeout(() => this.run(), 300 - ((this.scoreboard.level - 1) * 30));

    }
    init() {

        const self = this
        const arrArrowKey: Array<string> = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

        //監聽方向改變
        window.addEventListener('keydown', function (event) {
            if (arrArrowKey.includes(event.code)) {
                self.changeRunDirection(event.code)
            }
        })

        this.run()
    }

    changeRunDirection(runDirection: string) {
        this.runDirection = runDirection;
    }
}
