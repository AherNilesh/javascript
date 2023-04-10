let fn = "Nilesh"
console.log(typeof fn)
// let a="22"
// console.log(typeof a)
// let b=true
// console.log(typeof b)

let c = [1, 2, 3, 4, 5]
console.log(typeof c)

//function

// let p=15
// let q=30
// console.log(p+q)
// console.log(p-q)

// let s=20
// let v=12
// console.log(s+v)
// console.log(s-v)

function add(a, b) {
    console.log(a + b)
    console.log(a - b)

}
add(12, 5)
add(22,8)
add(55,44)

//1 function declaration

// function add(x,y){
//     return x+y
// }
// let y1=add(22,33)
// console.log(y1)

// let add1 = function (a, b) {
//         return a + b
//     }
//     console.log(add1)
//     let y2 = add1(2, 10)
//     console.log(y2)

//     let add2 = (x, y) => {
//             return x + y
//         }
//         let y4 = add2(30, 22)
//         console.log(y4)

// //call by value
// let a=33
// console.log(a) 
// let b=a
// console.log(b) 

// a=20
// console.log(a) 
// console.log(b) 

//call by reference

let arr=[2,3,4,5,6]
console.log(arr) 

let arr2=arr
console.log(arr2) 

arr[0]=100
console.log(arr) 
console.log(arr2) 

// 1. string as a parameter and string as return type
function greeting(a){
    return a
}
console.log(greeting('Welcome to India!!!'))


//2. array as parameter and array as return type

let rollNo=[11,22,33]
function arraPara(arr){
    //let arr=rollNo
    arr[0]=300
    return arr
}
console.log(rollNo)  
let q=arraPara(rollNo)
 console.log(q)


 //3. object as parameter and object as return type

let person = {
    fn: "nilesh",
    ln: "aher"
}
function objPara(obj) {
    //let obj=person
    obj.fn = "rahul"
    return obj
}
console.log(person)