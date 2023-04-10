// // // program2
// // let names = ["apple","mango","banana","grapes"]
// // Object literal

let amol = {
    fullName: "amol rao",
    age: 23,
    rollNo: 34,
    skills: ["js", "c++", "python", "jquery"]
}

let chinmay = {
    fullName: "chinmay deshpande",
    age: 33,
    rollNo: 22,
    skills: ["js", "python", "jquery"]
}
// // retrive (dot notation and bracket)---------PRINT OBJECT

// console.log(amol.fullName)
console.log(amol['fullName'])

// // add--------------ADD NEW

console.log(amol.city = 'pune')
console.log(amol['language'] = "marathi")

// // update -----------REPLACE

console.log(amol.city = "nagpur")
// amol['city'] = "wardha"

// // delete 

delete amol.city
// delete amol['language']

console.log(amol)



//  template 


class Person {
    fullName = undefined
    age = undefined
    rollNo = undefined
    skills = undefined
}

let ram = new Person()
// console.log(ram)
ram.fullName = "ram "
ram.age = 23
ram.rollNo = 23
ram.skills = ["python2", "js", 'css']
console.log(ram)


class Person2 {

    constructor(fullName, age, roll, skills) {
        this.fullName = fullName
        this.age = age
        this.roll = roll
        this.skills = skills
    }

}

let poorva = new Person2("poorva vyas", 29, 34, ["js", "python"])
let sarika = new Person2("sarika vyas", 26, 31, ["js", "python3"])
console.log(poorva)
console.log(sarika)


class nil {
    fullName = undefined
    age = undefined
    rollNo = undefined

}
let esh = new nil()
    esh.fullName = "aher"
   esh.age = 22
    esh.rollNo = 01

console.log(esh)