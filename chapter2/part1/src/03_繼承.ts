(function(){

    class Animal{
        name: string
        age: number

        constructor(name: string, age: number){
            this.name = name
            this.age = age
        }

        sayHello(){
            console.log('動物在叫.!')
        }
    }
    // 定義一個表示狗的類
    class Dog extends Animal{
       run(){
        console.log(`${this.name}再跑~~~`)
       }
       //如果子類與父類方法同名覆蓋父類方法 (覆寫)
       sayHello(){
            console.log('狗在叫.!')
       }
    }

    class Cat extends Animal{
       
    }

    const dog = new Dog('汪財', 10)
    const cat = new Cat('汪喵', 8)
    console.log(dog, dog.sayHello(), dog.run(), cat, cat.sayHello())
})();