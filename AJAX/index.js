// program -1
function additionA() {
    console.log('A')
}
function additionB() {
    console.log('B')
}
additionB()
additionA()

// program-2
function additionC() {
    setTimeout(function () {
        console.log('c')
    }, 2000)
}
function additionD() {
    console.log('D')
}
additionC()
additionD()

// // program 3
// // signup ------ username ------ login
// function userinfo(){
//     setTimeout(function(){
//         console.log("sign up complete")
//     },5000)

//     setTimeout(function(){
//         console.log("username created")
//     },4000)

//     setTimeout(function(){
//         console.log("login done")
//     },3000)
// }
// userinfo()

// -----------------------------------
// async ----- excution --- sync --- testing
// call back hell

// // program-

// function userinfo() {
//     setTimeout(function () {
//         console.log("sign up completed"),
//             setTimeout(function () {
//                 console.log("username created")
//                 setTimeout(function () {
//                     console.log("login done")
//                 }, 1000)
//             }, 2000)
//     }, 3000)
// }
// userinfo()

// ------------------------
// ES6 async code --- execution -- sync  =====> Promise
let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 100
    if (a == b) {
        resolve('a and b are equal')
    }
    else {
        reject('a and b are not equal')
    }
})

pro.then(function(str){
        console.log(str)
    },function(str){
        console.log(str)
    })
