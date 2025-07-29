class Animal{
    constructor(
        public name:string
    ){}
    speak():void{
        console.log(`${this.name}`)
    }
}

let dog = new Animal("Dog")
dog.speak()