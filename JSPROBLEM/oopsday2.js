 // object literal
let studentA={
    firstname:"nilesh",
    lastname:"aher",
    age:22,
    display:function(){
        console.log(this.name+this.lastname)
    }
}
console.log(studentA)

// function constructor
function PersonA(fn,ln,ag,rollNo){
    this.firstName = fn
    this.lastName = ln 
    this.age = ag
    this.rollNo = rollNo
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
}
let  raj = new PersonA("raj","gopal",22,33)
let  tina = new PersonA("tina","datta",32,11)
console.log(raj)
console.log(tina)

raj.display()

// Object._proto_  === Parent.Protype
console.log(raj.__proto__=== PersonA.prototype)
console.log(tina.__proto__=== PersonA.prototype)

PersonA.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
PersonA.prototype.country = "India"

raj.display()
tina.display()
console.log(raj.country)
console.log(raj.hasOwnProperty('country'))


let names = ["nilesh","raj","arohi"]
// Array
console.log(names._proto_ === Array.prototype)
names.push("hindi")
console.log(names)

Array.prototype.greet = function(){
    console.log("hello")
}

names.greet()