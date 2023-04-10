// //class 

// let nilesh={
//     firstName:"nilesh",
//     age:25
// }

// let rohan={
//     firstName:"rohan",
//     age:22
// }

// let pravin={
//     firstName:"pravin",
//     age:12
// }

//class==> Es6 class
//without constructor
//with constructor
//by using function/method
//set and key keyword

//1. without constructor
class Person {
    firstName = "nilesh"
    lastName = "aher"
    age = 25
    display = function () {
        console.log(this.firstName + this.lastName)
    }
}
let nilesh = new Person()
console.log(nilesh)

let vaibhav=new Person()
console.log(vaibhav)


//Setting object property outside of class
// class PersonA {
//     firstName =undefined
//     lastName = undefined
//     age = undefined
//     display = function () {
//         console.log(this.firstName + this.lastName)
//     }
// }

// let raj=new PersonA()
// console.log(raj)
// raj.firstName="Raj"
// raj.lastName="Gopal"
// raj.age=32
// raj.display()
// console.log(raj)


// let shivam=new Person()
// console.log(shivam)
// sham.firstName="shivam"
// shivam.lastName="puri"
// shivam.age=22
// console.log(shivam)


// with constructor  ---Es6 class

class PersonA {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    display () {
        console.log(this.firstName + this.lastName)
    }
}
let avi= new PersonA("avi", "kadlag", 4)
console.log(avi)
avi.display()

let Amol=new PersonA("Amol","sharma",22)
console.log(Amol)
Amol.display()

//================================================================

//by using function
class PersonD{
    setFirstName(fn){
        this.firstName=fn
    }
    setLastName(ln){
        this.lastName=ln
    }
    setAge(ag){
        this.age=ag
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    getAge(){
        return this.age
    }
}
let pankaj=new PersonD()
console.log(pankaj)

pankaj.setFirstName("nilesh")
pankaj.setLastName("aher")
pankaj.setAge(25)
console.log(pankaj)

console.log(pankaj.getFirstName())
console.log(pankaj.getLastName())
console.log(pankaj.getAge())