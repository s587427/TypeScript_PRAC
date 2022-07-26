import { makeLogger } from "../../node_modules/ts-loader/dist/logger";

export default class Snake {
    snakeHeaderElemet: HTMLElement;
    snakeContainerElement: HTMLElement;
    snakeBodies: HTMLCollection; //包括蛇頭

    constructor() {
        this.snakeContainerElement = document.getElementById('snake')!
        this.snakeHeaderElemet = document.querySelector('#snake > div')!
        this.snakeBodies = this.snakeContainerElement.getElementsByTagName('div')!
    }

    get x() {
        //console.log(this.snakeHeaderElemet.offsetLeft, 'this.snakeHeaderElemet.offsetLeft   ')
        return this.snakeHeaderElemet.offsetLeft;
    }

    get y() {
        return this.snakeHeaderElemet.offsetTop;
    }

    set x(value: number) {    
        //如果新值與舊值相同就不修改 !!!非常重要
        if(this.x === value) return;   
        
        //檢測值是否為合法
        if(value < 0 || value > 290){
            // 進入判斷說明蛇撞牆了
            throw new Error('撞牆了~~~ ')
        }

        /*
         !!!先改前一節位置最後在移動頭 
        */
        this.moveBody()
        this.snakeHeaderElemet.style.left = value + 'px';   
    }

    set y(value: number) {   
        if(this.y === value) return;
        
        if(value < 0 || value > 290){
            throw new Error('撞牆了~~~ ')
        }

        this.moveBody()
        this.snakeHeaderElemet.style.top = value + 'px';   
    }

    //增加蛇身  
    growUp() {
        // 新增 HTML 節點
        this.snakeContainerElement.insertAdjacentHTML('beforeend', '<div></div>')
        console.log(this.snakeBodies)
    }

    // 增加蛇身體移動的方法
    moveBody() {
        for (let i = this.snakeBodies.length - 1; i > 0; i--) {
            
            //獲取前身體的位置
            let X = (this.snakeBodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.snakeBodies[i - 1] as HTMLElement).offsetTop;
        
            //將後面的位置放置前面
            (this.snakeBodies[i] as HTMLElement).style.left = X + 'px';
            (this.snakeBodies[i] as HTMLElement).style.top = Y + 'px';       

        }
    }
}