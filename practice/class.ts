abstract class Animal{
    constructor(
        public name:string
    ){}
    speak():void{
        console.log(`${this.name} is barking`)
    }
}
class Dog extends Animal{
    constructor(
        public Bark:string
    ){super("Dog")}
}
let dog = new Dog("Dog")
dog.speak()

//public for use everywhere
//private for use within the class
//protected for use within the class and its subclass

//method overriding
class Animal1{
    speak():void{
        console.log('sounds')
    }
}
class Cow extends Animal1{
    speak():void{
        console.log('gives milk')
    }
}
const C = new Cow()
C.speak()
//MethodOverloading
class Greet{
    greet(message:string):void;
    greet(message:string,name:string):void;
    greet(message:string,name?:string):void{

    }
}
