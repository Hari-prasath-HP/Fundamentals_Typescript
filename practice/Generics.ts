function identity<T>(arg:T):T{
    return arg
}

//Generic Interface
interface Box<T>{
    contents: T
}

let box:Box<string> = {contents:'Hari'}

//Generic classes
class Queue<T>{
    private data:T[] = []
}