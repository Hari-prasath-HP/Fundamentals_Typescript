let a:any = "hello"
a.toUpperCase()

let b:unknown = "hello"
if(typeof b === "string"){
    console.log(b.toUpperCase())
}

