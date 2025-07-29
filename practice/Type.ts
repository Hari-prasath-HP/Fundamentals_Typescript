type person = {
    name:string,
    age:22,
}

// union types
let result : number | string

// type insertion multiple types into one;
type employee = {
    name: string ,
    startDate:Date
}

type Manager = {
    name:string,
    department:string
}

type teamlead = employee & Manager

//type aliases
type Point = {
    x:number,
    y:number
}
let point:Point = {x:10,y:20}

//literal types
let dir : 'North' | 'South' |'East' | 'West';
dir = 'North'

//Nullable
let name1:string | null= 'John'
name1 = null
let age:number | undefined

