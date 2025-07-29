interface Person{
    name:string,
    age:number,
    greet():void;
}

class students implements Person{
    constructor(
        public name:string,
        public age:number,
    ){}
    greet():void{
        console.log('Hello')
    }
}
