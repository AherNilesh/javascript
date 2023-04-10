// lexical scope
// function addition() {
//     let x = 100
//     let y = 50
//     console.log(x + y)
//     function additionB() {
//         let a = 10
//         let b = 50
//         console.log(x + y)
//         console.log(a + b)
//         function additionC() {
//             let s = 200
//             let t = 20
//             console.log(x + y + a + b + s + t)
//         }
//         additionC()
//     }
//     additionB()
// }
// addition()

// closures 
// program 2
// return is the last statment for a function

// function additionE() {
//     let p = 300
//     let q = 100
//     console.log(p + q)
//     return p + q
//     //  console.log('hello')
// }
// let t1 = additionE()
// console.log(t1)

// program 2b
// function additionS() {
//     let x1 = 100
//     let x2 = 50
//     return function () {
//         console.log(x1 + x2)
//     }
// }
//   let z1 = additionS()
// // let z1 = function () { 
// //     console.log(x1 + x2)
// // }