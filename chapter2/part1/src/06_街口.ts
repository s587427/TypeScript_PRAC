(function () {

    //描述一個對象類類型
    type myType = {
        name: string;
        age: number;
        //[propname: string]: any
    };

    /**
     *  街口用來定義一個類(對象)的結構, 用來定義一個類應該包含哪些屬性和
     *      同時接口也可以當成類型聲明去使用
     */
    interface myInterface {
        name: string;
        age: number;
    }

    interface myInterface {
       gender: string;
    }

    // const obj: myInterface = {
    //     name: '123',
    //     age: 20,
    //     gender: 'female'
    // };

    /**
     *  接口可以再定義類的時候去限制類的結構
     *      接口中的所有屬性都不能有實際的值
     *      接口只定義對象的結構，而不考慮實際值
     *          在接口中所有的方法都是抽象方法
     */

    interface myInter{
        name: string;
        sayHello():void;
    }

    /**
     *  定義類時， 可以去實現一個接口
     *      實現接口就是使類滿足接口的要求
     */
    class Myclass implements myInter{

        constructor(name:string){
            this.name = name;
        }

        name: string;
        sayHello(): void {  
            console.log('大家好');
        }
        
    }
})()