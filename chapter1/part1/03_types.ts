//也可以直接使用字面量(eg. 整數)進行類型聲明
let a: 10;
a = 10


//可以使用 | 來連接多個類型(聯合類型)
let b: "male" | "female";
b = "male" 
b = "female" 

let c: boolean | string;

// any表示任意類型
let d: any
d = 10;
d = 'hello';
d = 'true';

//unknown 表示未知類型的值
let e: unknown;
e = 10;
e = 'hello';

let s: string;
//d的類型是any 可以賦值給任意變量
//s = d
//!!!!!重要 unknown 實際上就是一個安全的any
// unknown 類型的變量，不能直接賦值給其他變量
if(typeof e === 'string'){
    s = e
}

// 類型斷言， 可以用來告訴解析變量的實際類型
/**
 *語法
 *  變量 as 類型
 * <類型>變量
 */
s = e as string;
s = <string>e;

function fn(): void{

}

//永遠不會返回值
function fn2(): never{
    throw new Error('抱錯了')
}

let o : object;
o = {}
o = function (){}; //方法也是一個object

// {}用來指定對象可以包含哪些屬性
//在屬性名加上問號表示屬性可選
let o2: {name: string, age?: number }
o2 = {name: '孫悟空', age: 20}

//[propName: string]: any表示任意屬性
let o3: {name: string, [propName: string]: any}
o3 = {name: '豬八戒', age:18, ggg: 123}


/**
 * 設置函數結構類型聲明
 *  語法:(型參:類型,型參:類型, ...) => 返回值
 */
let fn3: (a:number, b: number)=> number;


/**
 * 數組類型聲明
 * 類型[]
 * Array<類型>
 */
//string[] 表示字串數組
let arr: string[]
arr = ['a', 'b', 'c']

let arr2: number[];
arr2 = [1, 2 ,3]

let arr3: Array<number>
 
/*
*元組, 元組就固定長度的數組
    語法: [類型,類型,類型...]
 */
let h: [string, number]
h = ['hello', 2]


/**
 * enum 枚舉
 * 
 */
enum Gender{
 Male = 0,
 Female = 1   
}
let i:{name: string, gender: Gender};

i = {
    name: '孫悟空',
    gender: Gender.Male
}

//&表示同時
let j: {name: string} & { age: number}
j = {name: '孫悟空', age: 20}

//類型的別名
type myType = 1 | 2 | 3 | 4 | 5 ;
let k: myType
let l: myType
let m: myType

