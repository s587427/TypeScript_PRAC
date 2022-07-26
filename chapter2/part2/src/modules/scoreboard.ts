export default class Scoreboard{
    scoreElement: HTMLElement;
    levelElement: HTMLElement;
    leveUpConditon: number; //分數取餘數 === 0 就 升等
    maxLevel: number;
    
    score = 0;
    level = 0;

    constructor( maxLevel:number = 10, leveUpConditon:number = 3){
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.leveUpConditon = leveUpConditon;
        this.maxLevel = maxLevel;
    }

    addScore(){ 
        // 加分後得分數
        this.scoreElement.innerText = (++this.score).toString();

        if(this.score % this.leveUpConditon === 0) this.levelUp();
    }

    levelUp(){
        if(++this.level > this.maxLevel) return
        this.levelElement.innerText = (++this.level).toString();
    }
}

