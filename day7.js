// Setting the valu at the time of object creation
class PersonA {
    constructor(fn, ln, ag) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
    }
    displayname() {
        console.log(this.firstname + this.lastname)
    }
}
let nil = new PersonA("nil", 'aher', 23)
console.log(nil)
nil.displayname()

// =========================

class PersonB {
    setFirstName(fn) {
        this.firstName = fn
    }
    setLastName(ln) {
        this.LastName = ln
    }
    setAge(ag) {
        this.age = ag
    }

    getFirstname() {
        return this.firstName
    }
    getLastname() {
        return this.LastName
    }
    getAge() {
        return this.age
    }
}
let raj = new PersonB()

console.log(raj)
raj.setFirstName('raj')
raj.setAge(21)
console.log(raj)

let q = raj.getAge()
let q2 = raj.getFirstname()
console.log(q)
console.log(q2)

// set and get keyword--property

class PersonC {
    set fName(fn) {
        this.firstName = fn
    }
    set LName(ln) {
        this.LastName = ln
    }
    set Age(ag) {
        this.age = ag
    }

    get Firstname() {
        return this.firstName
    }
    get Lastname() {
        return this.LastName
    }
    get Age() {
        return this.age
    }
}
let arjun = new PersonC()
arjun.fName="arjun"
arjun.LName="aroda"
arjun.Age=43

console.log(arjun)
console.log(arjun.LastName)
console.log(arjun.age)




// =================================

class PersonD{
    static greeting(name){
        console.log("hi "+name)
    }
}
PersonD.greeting("virat")