// // function constructor
// function personZ(fn, ln, ag, rn) {
//     this.firstname = fn
//     this.lastname = ln
//     this.age = ag
//     this.rollno = rn
//     this.display = function () {
//         console.log(this.firstname + this.lastname)
//     }
// }
// let shalin = new personZ("Shalin", "aher", 28, 12)
// let abdu=new personZ("abdu","raj",4,32)
// console.log(shalin)
// console.log(abdu)


function personR(fn, ln, ag) {
    this.firstname = fn
    this.lastname = ln
    this.age = ag
}
let raj = new personR("raj", "gopal", 33)
let anna = new personR("anna", "saheb", 29)

//adding method to prototype
personR.prototype.display = function () {
    console.log(this.firstname + this.lastname)
}

//adding property to prototype
personR.prototype.language = "hindi"
// personR.prototype.language = "marathi"


// every object has __proto__===parent.prototype
console.log(raj.__proto__ === personR.prototype)
console.log(anna.__proto__ === personR.prototype)
console.log(raj)
console.log(anna)


// array

let names=['nil',"avi","apoorva"]
let cities=["mumbai","pune"]
console.log(names.__proto__===Array.prototype)
names.push('ram')
console.log(names)
Array.prototype.language = "machine"