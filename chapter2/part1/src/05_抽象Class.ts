(function(){
    /**
     * 以abstract開頭的類是抽象類
     *      抽象類和其他類區別不大，只是不能用來創建對象
     *      抽象類就是專們用來被繼承的類
     */
    abstract class Animal{
        name: string;

        constructor(name:string){
            this.name = name
        }

        // 定一個抽象方法
        // 抽象方法使用 abstract開頭，沒有方法體
        // 抽象方法只能定義再抽象類中, 子類必須對抽象方法進行重寫
        abstract sayHello():void
    }

    class Dog extends Animal{
        age: number
        
        constructor(name:string, age:number){
            super(name)
            this.age = age
        }
        sayHello(){
          console.log('汪汪汪')
        }
    }

    const dog = new Dog('旺財', 20)
    dog.sayHello()
    console.log(dog)
})()