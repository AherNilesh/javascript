// object literal
let Nilesh = {
    firstName:"Nilesh",
    lastName:"aher",
    age:22,
    rollNo:04
}

let amol = {
    firstName:"amol",
    lastName:"rahane",
    age:20,
    rollNo:10
}
console.log(Nilesh)

// function constructor 
function Person(fn,ln,ag,rollNo){
    this.firstName  = fn
    this.lastName = ln
    this.age  = ag
    this.rollNo = rollNo
}

let ram = new Person("ram","shine",22,40)
let pavina = new Person("pavina", "vyas" , 23 ,76)
let avi = new Person("avi", "kadlag" , 28 ,37)
console.log(ram)
console.log(avi)
console.log(pavina)

// es6 class 

class PersonA {

    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age  = ag
        this.rollNo = rollNo
    }

}

let sagar = new PersonA("sagar","pansare",22,56)
let poorva = new PersonA("poorva","vyas",12,29)

console.log(sagar)
console.log(poorva)


// Object.create()

let pankaj = Object.create({})
console.log(pankaj)

pankaj.firstName = "pankaj"
pankaj.lastName = "ghumare"
pankaj.age = 25
console.log(pankaj)