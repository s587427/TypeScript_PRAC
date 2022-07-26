"use strict";
(function () {
    /**
     * 以abstract開頭的類是抽象類
     *      抽象類和其他類區別不大，只是不能用來創建對象
     *      抽象類就是專們用來被繼承的類
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        sayHello() {
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺財', 20);
    dog.sayHello();
    console.log(dog);
})();
