let amol = {
    firstname: "anil",
    lastname: "ray",
    age: 32,
    skills: ["python", "java"],
    display: function () {
        console.log(this.firstname + this.lastname)
    }
}
console.log(amol)




//es6 class
class PersonA {
    constructor(firstName, lastName, rollNo, age, skills) {
        this.firstName = firstName
        this.lastName = lastName
        this.rollNo = rollNo
        this.age = age
        this.skills = skills
        this.display = function () {
            console.log(this.firstName + this.lastName)
        }
    }
}
let raja = new PersonA("raja", "dani", 23, 34, ["python", "django", "javascript"])
console.log(raja)

// function constructor
function personQ(fn, ln, ag, rn) {
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    this.rollno = rn
    this.display = function () {
        console.log(this.firstname + this.lastname)
    }
}
let nil = new personQ("nil", "aher", 28, 1)
console.log(nil)
nil.display()


// object create
let samir = Object.create({})
console.log(samir)


let obj={
    init:function(fn,ln,ag,rn){
        this.firstname=fn,
        this.lastname=ln,
        this.age=ag
        this.rollno=rn
    },
    display:function(){
        console.log(this.firstname+this.lastname)
    }
}
let pravin=Object.create(obj)
pravin.init("pravin","tambe",54,9)
console.log(pravin)