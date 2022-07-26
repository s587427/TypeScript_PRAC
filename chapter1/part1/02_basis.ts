//聲明變數a，同時指定它的類型為number
let a: number;

//a的類型設置為了number, 在以後使用過程中a的值只能是數字

a = 10;
a = 33;
//a = 'hello'; //此行代碼會報錯 因為a的類型是number, 不能賦值字串

let b: string;
b = 'hello'
//b = 123

//聲明完直接複製
//let c: boolean = false

//如果聲明變數和賦值是同時進行的, TS可以自動對變數進行類型檢測
let c = false;

//js中的函數不考慮參數的類型和個數的
function sum(a: number, b: number): number{
    return a + b;
}


let result = sum(123,456)