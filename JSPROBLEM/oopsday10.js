// lexical scope
function addition(){
    let x=10
    let y=30
    console.log(x+y)
    function additionB() {
        let a = 100
        let b = 50
        console.log(x + y + a + b)
        function additionC() {
            let s = 10
            let t = 50
            console.log(x+y+a+b+s+t)
        }
        additionC()
    }
    additionB()
}addition()

// program 2
function greet(){
    console.log('hello')
    return 'hello  !'
    console.log('bye')
}
let q=greet()
console.log(q)

// ================
function Calculation(x,y){
    return function(){
        console.log(x+y)
    }
}
let r = Calculation(10,12)
console.log(r)
console.log(x)
