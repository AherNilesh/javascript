let Nilesh = {
    firstName: "nilesh",
    lastName: "aher",
    age: 20,
    rollNo: 35,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

console.log(Nilesh.firstName)
console.log(Nilesh['lastName'])

console.log(Nilesh.display) //function print
Nilesh.display()

// let abc = Nilesh.display //
// function () {
//     console.log(this.firstName + this.lastName)
// }
// console.log(abc) //function
// abc()
// =======================================
//1. bind()

// let a = Nilesh.display.bind(Nilesh)
// console.log(a)
// a()

// //2. call()
// Nilesh.display.call(Nilesh)

// //3. apply()
// Nilesh.display.apply(Nilesh)

// ==================

// let NileshA = {
//     firstName: "nilesh",
//     lastName: "aher",
//     age: 20,
//     rollNo: 35,
//     display: function () {
//         console.log(this.firstName + this.lastName)
//     }
// }

//  let Vaibhavk = {
//         firstName: "Vaibhav",
//         lastName: "Raut"
//     }
    
//     let y1 = Nilesh.display.bind(Vaibhavk)
//     y1()

//     // ============================
//         let dinga = {
//             firstName: "Dinga"
//         }
        
//         let pinga = {
//             firstName: "Pinga"
//         }
        
//         let ranga = {
//             firstName: "Ranga"
//         }
        
//         let simga = {
//             firstName: "Simga"
//         }
        
//         let displayFirstName = function () {
//             console.log(this.firstName)
//         }
//         let s1=displayFirstName.bind(dinga)
//          s1()
// displayFirstName.bind(simga)()
//  displayFirstName.call(pinga)



let dinga = {
    firstName: "Dinga"
}

let pinga = {
    firstName: "Pinga"
}

let ranga = {
    firstName: "Ranga"
}

let simga = {
    firstName: "Simga"
}

let displayFirstName = function (greet1, greet2) {
    console.log(`${greet1} ${this.firstName} ${greet2} !!`)
}

let y1=displayFirstName.bind(ranga,"GoodMorning","Have a nice day")
y1()
displayFirstName.call(dinga,"Goodafternoon", "have a good day")

//apply()
displayFirstName.apply(simga,["Good night","By"])

