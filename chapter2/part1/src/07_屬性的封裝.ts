(function () {
    //表示人的一個類
    class Person {
        // TS 可以在屬性前添加屬性修飾符
        /**
         *  public 修飾的屬性可以再任意位置訪問(修改) 默認值
         *      (包括子類)
         *  private 私有屬性只能在類的內部進行訪問(修改)
         *  protected 受包護的屬性，只能在當前類和當前子類中使用
         * 
         */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /**
         *  getter 方法用來讀取屬性
         *  setter 方法用來設置屬性
         *      - 它們被稱為屬性的存取器
         * 
         */
        //定義一個方法， 用來獲取name屬性
        // getName() {
        //     return this._name
        // }

        // // 定義方法， 用來設置name屬性
        // setName(value: string) {
        //     this._name = value
        // }

        // getAge() {
        //     return this._age
        // }

        // setAge(value: number) {
        //     if (value >= 0) {
        //         this._age = value
        //     }
        // }

        // TS設置getter方法的方式
        get name(){
            console.log('get name()執行了')
            return this._name;
        }
        set name(value: string){
            this._name = value;
        }

        get age(){
            return this._age;
        }

        set age(value: number){
            if(value >= 0)
                this._age = value;
        }
    }

    const per = new Person('孫悟空', 18)

    /**
     *  現在屬性是在對象中設置的， 屬性可以任意地被修改
     *      屬性可以任意被修改將會導致對象中的數據變得非常不安全
     *          - 通過類中添加方法，使得私有屬性可以被外部訪問
     */
    // per.setName('豬八戒')
    // per.setAge(-33)
    per.name = '豬八戒';
    per.age = 33;
    console.log(per)


    

    class C{
        // 可以直接將屬性定義在構造函數
        constructor(public name: string, public age: number){

        }
    }
    const c = new C('123', 10)
    console.log(c)
})()
