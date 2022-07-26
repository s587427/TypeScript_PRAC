
class Person{
    //定義實例屬性, 需要通過實例對象去訪問
    name: string = '孫悟空' //readonly 只讀屬性
    age: number = 18

    // 在屬性前面使用static可以定義類屬性 (靜態屬性)，可以直接通過類去訪問
    static readonly weigth: number = 50

    // 定義方法
    // 如果方法以static開頭方法則是類方法，可以直接通過類去使用
    sayHello(){
        console.log('say hello')
    }
}

const per = new Person()

per.name = 'zheng'
per.sayHello()
console.log(per, Person.weigth)

