// interface student{
//     name:string,
//     age?:number
// }
// let con : string |number
// function greet(name:string):void{
//     console.log('end')
// }

// function show<T>(name:T):T{
//     return name
// }
function sum(nums:number[]):number{
    return nums.reduce((a,b)=>a+b)
}
sum([1,2,3,4,5])

let arr:[name:string,age:number]= ['Hari',22]
let arr1:string|number='Hari'