// // async function
// function createuser(){
//     setTimeout(function(){
//         console.log("user created")

//     },3000)
// }
// function getId(){
//         setTimeout(function(){
//             console.log("getID")
//         },2000)
//     }

//     function getinfo(){
//             setTimeout(function(){
//                 console.log("getinfo")
//             },1000)
//         }
// createuser()
// getId()
// getinfo()


// function createuser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("user created")
//         }, 3000)
//     })
// }
// function getId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("get Id")
//         }, 2000)
//     })
// }
// function getInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("get info")
//         }, 1000)
//     })
// }
// // createuser().then(function(res){
// //     console.log(res)
// //     return getId()
// // }).then(function(res){
// //     console.log(res)
// //     return getInfo()
// // })
// // .then(function(res){
// //     console.log(res)
// // })

// async function getusersInfo(){
//     let res1 =  await  createuser()
//     console.log(res1)
//     let res2 =  await  getId()
//     console.log(res2)
//     let res3 =  await  getInfo() 
//     console.log(res3)
//  }
//  getusersInfo()


// // -----------------------------------------

//  async function getUsers(){
//     let qq = await Promise.all([
//         createuser(),
//         getInfo(),
//         getId()
//     ])
//     console.log(qq)
// }
// getUsers()

// --------------------------------------

// const w=function(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("hello")
//         },3000)
//     })
// }

// async function getusers(){
//     console.time('timeserial')
//     await w()
//     await w()
//     console.timeEnd('timeserial')
// }
// getusers()

// async function getusers(){
//     console.time('timeserial')
//     let c=await Promise.all([

//         w(),
//         w()
//     ])
//     console.timeEnd('timeserial')
// }
// getusers()



// let p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('hello')
//     }, 3000);
// })
// let p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('Hi')
//     }, 2000);
// })
// let p3 = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve('bye')
//         }, 1000);
//     })


//     async function getUser(){
//             console.time('timeSerial')
//             let a = await p1
//             console.log(a)
//             let a2 = await p2
//             console.log(a2)
//             let a3 = await p3
//             console.log(a3)
//             console.timeEnd('timeSerial')
//         }
//         getUser()


//     async function getUser(){
//             console.time('timeSerial')

//                 await  Promise.all([
//                     p1,p2,p3
//                  ])

//             console.timeEnd('timeSerial')
//         }
//         getUser()


// --------------------------------------

// Promise cobinators 4 methods

// Promise.all()   --------------reject shotcircuit 
// Promise.race()  ---------- whoever comes the first resolve or reject
// Promisea.allSettled() ------gives output for resolve and return
// Promise.any() ---------------shortcuit at first resolve

async function getuser() {
    let a = await Promise.all([
        Promise.resolve("hello"),
        Promise.reject("bye"),
        Promise.resolve("hi")
    ])
    console.log(a)
}
// getuser()


async function getuser2() {
    let a = await Promise.allSettled([
        Promise.resolve("hello"),
        Promise.reject("bye"),
        Promise.resolve("hi")
    ])
    console.log(a)
}
getuser2()





async function getUser3() {
        let o = await Promise.race([
            new Promise(function (resolve, reject) {
                reject('Bye')
            }, 5000).then(function(res){
                console.log(res)
            },function(res){
                console.log(res)
            }),
    
            new Promise(function (resolve, reject) {
                resolve('Hi')
            }, 6000)
    
        ])
    
        console.log(o)
    }
    
    getUser3()
    