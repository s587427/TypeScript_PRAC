class Dog{
    name: string
    age: number

    // 構造函數會在對向被創建時調用
    constructor(name: string, age:number){
        // 在實例方法中，this就表示當前的實例
        this.name = name
        this.age = age
    }

    bark(){
        alert('汪汪汪 !')
        console.log(this.name)
    }
}

const dog = new Dog('小黑', 4)
const dog2 = new Dog('小白', 8)
console.log(dog, dog2)