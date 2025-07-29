interface Person{
    name:string,
    age:number,
    greet():void;
}

class students implements Person{
    constructor(
        public name:string,
        public age:number,
        public email:string
    ){}
    greet():void{
        console.log('Hello')
    }
}
//reopen interface is to modify the interface
interface Person{
    email:string
}
//interface inheritance
interface Employee extends Person{
    employeeId : number
}
