let person:{name:string,age:number} = {name:'Hari',age:22}

//obj with methods
let cal:{add:(x:number,y:number)=> number}={
    add:(x,y) => x+y
}

//obj with specific values
let config:{readonly apikey:string,debug:boolean}={apikey:'abc',debug:false}

// return 
function greet():string{
    return 'Hari'
}



