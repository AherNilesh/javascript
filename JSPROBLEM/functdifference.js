//function declaration
//function expresion
//arrow function

// function add(a, b) {
//         console.log(a + b)
//     }add(5,8)

// let add1=()=>{
//     console.log('hello')
// }

// let add2=function(){
//         console.log('bye')
//     }

    let x=10 
    console.log(x)
    //  console.log(window.x) ==undefined

    var y=20 //global
console.log(y) //20
//  console.log(window.y)

// let info = {
//         firstName: "nilesh",
//         lastName: "aher",
//         age: 25,
//         display:function(){
//             console.log(this==info)
//             console.log(this.firstName+this.lastName)

//             let greet = function () {
//                  console.log(this == window) //true
//                  console.log(this.firstName + this.lastName) //NaN
//               }
//                 greet()
//         }
//     }
//     console.log(info.display)
//     info.display()   true

// ///////-=========================================
// var firstName="ram"
// var lastName="nam"
// let info = {
//             firstName: "nilesh",
//             lastName: "aher",
//             age: 25,
//             display:function(){
//                 console.log(this==info)
//                 console.log(this.firstName+this.lastName)
    
//                 let greet = function () {
//                      console.log(this == window) //true
//                      console.log(this.firstName + this.lastName) 
//                   }
//                     greet()
//             }
//         }
//     info.display()

// ===================================
// var firstName="ram"
// var lastName="nam"
// let info = {
//             firstName: "nilesh",
//             lastName: "aher",
//             age: 25,
//             display:function(){
//                 console.log(this==info)
//                 console.log(this.firstName+this.lastName)
    
//                 function greet () {
//                      console.log(this == window) //true
//                      console.log(this.firstName + this.lastName) 
//                   }
//                     greet()
//             }
//         }
//         info.display()

// =====================================================

let info = {
            firstName: "nilesh",
            lastName: "aher",
            age: 25,
            display:function(){
                console.log(this==info)
                console.log(this.firstName+this.lastName)
    
                let greet =()=> {
                     console.log(this == info) //true
                     console.log(this.firstName + this.lastName) 
                  }
                    greet()
            }
        }
        info.display()
    