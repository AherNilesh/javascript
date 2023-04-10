// let human = {
//         firstName: "Nilesh",
//         lastName: "Aher",
//         age: 25,
//         display: function () {
//             console.log(this.age)
//         }
//     }
//     console.log(human.age) 
//  human.display()

// =========================================


//lexical scope
//function inside function ==> parent function variable are acessible in child function

// function add() {
//     let a = 30
//     let b = 20
//     console.log(a + b)

//     function add1() {
//         let c = 100
//         let d = 40
//         console.log(c + d)
//         console.log(a + b + c + d)

//         function add2() {
//                      let e = 60
//                     let f = 20
//                     console.log(e + f) 
//                     console.log(a + b + c + d) 
//                 console.log(a + b + c + d + e + f)
//         }add2()

//     } add1()
// } add()

// ==========================
function init() {
        let p = 20
        let q = 3
        console.log(p + q)
        //  console.log(r + s) //not accessible
    
        function initOne() {
            let r = 100
            let s = 120
            console.log(p + q) 
        }
        initOne()
    }
    init()



    // ========================================
//globle scope

let e = 15
let f = 20

function display() {
    let a = 8
    let b = 8
    console.log(a + b) 
    console.log(e + f)

    function display1() {
        let c = 30
        let d = 25
        let e = 100
        let f = 50
        console.log(c + d) 
        console.log(e + f + c + d) 

        function display2() {
            let e = 400
            let f = 300
            console.log(e + f)
        }
        display2()
    }
    display1()
}
display()


// =====================

//closure

function add(){
    let x=33
    let y=22
    return x+y
    console.log(x+y+10)
}
let result=add()
console.log(result)