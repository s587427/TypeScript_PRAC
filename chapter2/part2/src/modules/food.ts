export default class Food{
    element: HTMLElement;
    constructor(){
        this.element = document.getElementById('food')!; //表示存在
    }  

    // 取得食物位置

    get x() {
        return this.element.offsetLeft;
    }

    get y() {
        return this.element.offsetTop;
    }

    // 改變食物位置
    changePostion(){
        const x = Math.round(Math.random()*29) * 10
        const y = Math.round(Math.random()*29) * 10
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }

}


