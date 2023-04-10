function PersonF(fn, ln, ag) {
    this.firstname = fn
    this.lastname = ln
    this.age = ag
}
let abhi = new PersonF('abhi', "aher", 34)
let ayushi = new PersonF('ayushi', "rao", 23)

console.log(abhi)
console.log(ayushi)

console.log(abhi.__proto__ === PersonF.prototype)
PersonF.prototype.displayName = function () {
    console.log(this.firstname + this.lastname)
}
abhi.displayName()
ayushi.displayName()

// es6 class
class PersonB {
    constructor(firstName, lastName, age, rollNo) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.rollNo = rollNo
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}
let nil = new PersonB("nil", "ager", 22, 65)
let sham = new PersonB("sham", "ambfre", 32, 65)
console.log(nil)
nil.displayName()



// Object.create()
let obj = {
    init:function(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rollNo
    },
    displayName(){
        console.log(this.firstName + this.lastName)
    },
}

let abhay = Object.create(obj)
abhay.init("abhay","irani",23,34)
console.log(abhay)

class PersonD{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }

}
let nilesh=new PersonD("nilesh","aher")