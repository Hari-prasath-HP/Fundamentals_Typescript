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
