let obj = {
    init: function (fn, ln) {
        this.firstname = fn
        this.lastname = ln
    },
    displayName: function () {
        console.log(this.firstname + this.lastname)
    }
}
let nil = Object.create(obj)
nil.init('nil', "aher")
nil.displayName()
console.log(nil)



function PersonA(fn, ln, ag) {
    this.firstname = fn
    this.lastname = ln
    this.age = ag
}
let abhi = new PersonA('abhi', "aher", 34)
let ayushi = new PersonA('ayushi', "rao", 23)

console.log(abhi)
console.log(ayushi)

console.log(abhi.__proto__ === PersonA.prototype)
PersonA.prototype.displayName = function () {
    console.log(this.firstname + this.lastname)
}
abhi.displayName()
ayushi.displayName()


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
let VIRAT = new PersonB("VIRAT", "KOHLI", 22, 65)
let sham = new PersonB("sham", "ambfre", 32, 65)
console.log(VIRAT)
nil.displayName()