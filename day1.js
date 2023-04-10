//  object literal
let nilesh = {
    firstName: "nilesh",
    lastName: "aher",
    age: "22",
    skills: ["python", "java", "js"]
}
//  console.log(nilesh)
let abhi = {
    firstName: "abhi",
    lastName: "rao",
    age: "23",
    skills: ["c++", "java", "js"]

}
// // retive
console.log(nilesh.firstName)
console.log(nilesh["lastName"])

// add
abhi.city = "mumbai"
nilesh.city = "nagpur"

// update
nilesh.age = 34

// delete
delete abhi.skills

console.log(abhi)
console.log(nilesh)

// 1) function constructor
// 1 program

function person(fn, ln, ag, rn, sk) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollno = rn
    this.skills = sk
}
let apoorva = new person('nil', 'rane', 43, 320, "dance")
console.log(apoorva)
apoorva.firstName = "aparna"
console.log(apoorva.age)
delete apoorva.skills
console.log(apoorva)

// 2 program
let vehicle = function (color, type) {
    this.color = color
    this.type = type
    this.displayColor = function () {
        console.log(this.color)
    }
}

let audi = new vehicle("blue", "SWIFT")
console.log(audi.color)
console.log(audi.type)
audi.displayColor()
// console.log(audi)


// 3 program

class personD {
    constructor(fn, ln, ag, rn, sk) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollno = rn
        this.skills = sk
    }
}
let aman = new personD("aman", "rao", 5, 11, "singing")
console.log(aman)


class vehicleD {
    constructor(color, type) {
        this.color = color
        this.type = type
        this.displayColor = function () {
            console.log(this.color)
        }
    }

}
let BMWS=new vehicleD("yellow","sedane")
console.log(BMWS)
BMWS.displayColor()