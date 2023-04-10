// object literal

// function constructor 
function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
    // this.display = function(){
    //     console.log(this.firtName + this.lastName)
    // }
}

let nilesh = new Person("nilesh","aher")
let amol = new Person("amol","rahane")

// console.log(nilesh)
// console.log(amol)
//Every object has one Object.__proto__  === Parent.prototype


console.log(amol instanceof Person)
console.log(nilesh.__proto__ === Person.prototype)
Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}

Person.prototype.country = "India"

console.log(nilesh)
console.log(amol)
nilesh.display()
amol.display()

console.log(amol.country)
console.log(nilesh.country)


console.log(amol.hasOwnProperty('country'))
console.log(amol.hasOwnProperty('country'))

console.log(amol.hasOwnProperty('firstName'))
console.log(amol.hasOwnProperty('lastName'))

// Es6 class 

class PersonB {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    display(){
        console.log(this.firstName + this.lastName)
    }

}
let raj = new PersonB("raj","dani")
let ram = new PersonB("ram","dani")


console.log(raj)
console.log(ram)

raj.display()
ram.display()

// program 3

// let gopal = Object.create({})
// console.log(sarika)

// gopal.firstName = "gopal"
// gopal.lastName = "pansare"
// gopal.display = function(){
//     console.log(this.firstName + this.lastName)
// }

// gopal.display()

let obj = {
    init:function(fn,ln){
        this.firstName = fn,
        this.lastName = ln
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}


let sagar = Object.create(obj)
console.log(sagar)
sagar.init("sham","vyas")
sagar.display()