(function(){
    class Animal{
        name: string;

        constructor(name:string){
            this.name = name
        }

        sayHello(){
            console.log('動物在叫')
        }
    }

    class Dog extends Animal{
        age: number
        
        constructor(name:string, age:number){
            super(name)
            this.age = age
        }
        sayHello(){
            // 在類的方法中super就表示當前的父類
            super.sayHello()
        }
    }

    const dog = new Dog('旺財', 20)
    dog.sayHello()
    console.log(dog)
})()