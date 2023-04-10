// program 1
// function additionA() {
//     console.log('A')
// }
// function additionB() {
//     console.log('B')
// }
// additionB()
// additionA()

// // program2
// function additionC() {
//     setTimeout(function () {
//         console.log('c')
//     }, 1000)
// }
// function additionD() {
//     console.log('d')
// }
// additionC()
// additionD()

// program 3
// usercreate  ------ username ------ info

// function usercreated(){
//     setTimeout(function(){
//         console.log('user created')
//     },3000)
//     setTimeout(function(){
//         console.log('username found')
//     },2000)
//     setTimeout(function(){
//         console.log('user info')s
//     },1000)
// }
// usercreated()


// call back hell

// function usercreated() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('username found')
//             setTimeout(function () {
//                 console.log('user info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// usercreated()

// // pending  ---------- relsolve -------- reject 
// let pro = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 20
//     if (a == b) {
//         // console.log(a)
//         resolve('a and b are equal')
//     }
//     else {
//         reject('a and b are not equal')
//     }
// })
// pro.then(function (s) {
//     console.log(s)
// }, function (s) {
//     console.log(s)
// })


// let pro2 = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 200
//     if (a == b) {
//         // console.log(a)
//         resolve('a and b are equal')
//     }
//     else {
//         reject('a and b are not equal')
//     }
// })
// pro2
// .then(function(s){
//     console.log(s)
// })
// .catch(function(s){
//     console.log(s)
// })
// .finally(function(){
//         console.log('I will run any case')
//     })
    


    let pro3 = new Promise(function (resolve, reject) {
        let a = 200
        let b = 200
        if (a == b) {
            // console.log(a)
            resolve('a and b are equal')
        }
        else {
            reject('a and b are not equal')
        }
    })
    pro3
    .then(function(s){
        console.log(s)
        return[11,22,33]
    })
    .then(function(a){
        console.log(a)
        console.log(a[1])
    })
    .catch(function(s){
        console.log(s)
    })
    .finally(function(){
            console.log('I will run any case')
        })
        