// Actual diff between let var const

// let x=10
// console.log(x)

// //Update
// x=20
// console.log(x)

var k = 80
 k = 90
console.log(k)

// ===================================
// const x1=200
// console.log(x1)
// x1=22
// console.log(x1)--error

// ======================
// program-1
// {}  => block
//let const ==> scope => blocked scope varibale

{
    let z=20
    console.log(z)
}
// console.log(z)
//Program2

// let y1 = 100
// {
//     let y1 = 500
//     console.log(y1) //500
// }
// console.log(y1) //100

//Program 3
let x1 = 900
{
    console.log(x1) //900
    x1 = 200
    console.log(x1) //200 
}
console.log(x1) //200

 let z1=500
{
    // console.log(z1)
    let z1=300
    console.log(z1)
}
console.log(z1)

// program 5
// {
//     const p1 = 200
// }
// console.log(p1)// p1 is not defined

//program 6
// const k = 400
// {
//     console.log(k) //400
//     // k = 100
//     // console.log(k)//error
// }
// console.log(k)

//Program 7

{
    var a = 900
}
console.log(a) //900


//let and const have block scope
//var dont have block scope
//var having function scope

//progarm 8
var num = 300
console.log(num) //300
function add() {
    var num = 800
    console.log(num) //800
}
console.log(num) //300
add()
 console.log(num)


 //Program 9
function init(){
    var t1=555
    console.log(t1) //555
}
init()
// console.log(t1)//error