// setting the instance fields at the time of object creatio

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
sham.displayName()
nil.displayName()


// Using get and set method
class PersonD {
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
let rahul = new PersonD()
console.log(rahul)
rahul.setFirstName("rahul")
rahul.setLastName("david")
console.log(rahul)


// ==============================
class PersonF {
    set fName(fn) {
        this.firstName = fn
    }
    set lName(ln) {
        this.LastName = ln
    }
    set Age(ag) {
        this.age = ag
    }
}
let karan = new PersonF()
karan.fName = "karan"
karan.lName = "aher"
karan.Age = 65
console.log(karan)