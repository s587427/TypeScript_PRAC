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
        if (this.x === value) return;

        //檢測值是否為合法
        if (value < 0 || value > 290) {
            // 進入判斷說明蛇撞牆了
            throw new Error('撞牆了~~~ ')
        }

        //判斷蛇掉頭(需先移動完身體再判斷)  
        if (this.checkTurnBack(value, 'offsetLeft')) {
            // 往左走發生掉頭往右走
            if (value > this.x) {
                // 繼續向左走.
                console.log(`向右回頭ㄌ要移動的x:${value}，目前的x:${this.x}`)
                value -= 20;
            } else {
                // 繼續向左走
                console.log(`向左回頭ㄌ回頭ㄌ要移動的x:${value}，目前的x:${this.x}`)
                value += 20;
            }

        }
        //!!!先改前一節位置最後在移動頭
        this.moveBody()
        this.snakeHeaderElemet.style.left = value + 'px';

        // 檢測撞到自身
        this.checkHitBody()
    }

    set y(value: number) {
        if (this.y === value) return;

        if (value < 0 || value > 290) {
            throw new Error('撞牆了~~~ ')
        }

        if (this.checkTurnBack(value, 'offsetTop')) {

            if (value > this.y)
                value -= 20;
            else
                value += 20;
        }

        this.moveBody()
        this.snakeHeaderElemet.style.top = value + 'px';

        // 檢測撞到自身
        this.checkHitBody()
    }

    // 增加蛇身  
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

    // 確認回頭
    checkTurnBack(value: number, direction: 'offsetLeft' | 'offsetTop') {
        return this.snakeBodies.length > 1 && value === (this.snakeBodies[1] as HTMLElement)[direction]
    }

    // 蛇撞到身體
    checkHitBody() {
        //只有蛇頭不檢測
        if(this.snakeBodies.length === 1) return

        for (let i = 1; i < this.snakeBodies.length; i++) {
            if (this.x === (this.snakeBodies[i] as HTMLElement).offsetLeft
                && this.y === (this.snakeBodies[i] as HTMLElement).offsetTop) {
                    throw new Error('撞到自己了~~!')
            }
        }

    }
}