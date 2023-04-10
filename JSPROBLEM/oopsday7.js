//polymorphism

//overriding  => different class, same method name, same signature

// class shape{
//     draw(){
//         console.log('i Am geric shape')
//     }
// }
// class square extends shape{
//     draw(){
//         console.log('i am square')
//     }
// }
// class circle extends square{
//     draw(){
//         console.log('i am circle')
//     }
// }
// let s1=new shape()
// s1.draw()

// let s2=new square()
// s2.draw()

// let s3=new circle()
// s3.draw()

// program 2

class shape{
    draw(){
        console.log('i Am geric shape')
    }
}
class square extends shape{
    draw(){
        super.draw()
        console.log('i am square')
    }
}
class circle extends square{
    draw(){
        super.draw()
        console.log('i am circle')
    }
}
let s3=new circle()
s3.draw()

// ===========
class Myntra{
        image(){
            console.log('image of different items')
        }
    }
    
    class Sandle extends Myntra{
        image(){
            super.image()
            console.log('image of sandle')
        }
    }
    
    class Shoe extends Myntra{
        image(){
            super.image()
            console.log('image of shoe')
        }
    }
    let d3=new Shoe()
    d3.image()
    let d2=new Sandle()
     d2.image()
     let d1=new Myntra()
     d1.image()

    //     --------------------------
    // overloading ==> same class, same method name, different signature(parameter)

    // class Calculator {
    //         addition(a, b) {
    //             console.log(a + b)
    //         }
        
    //         addition(a, b, c) {
    //             console.log(a + b + c)
    //         }
        
    //         addition(a, b, c, d) {
    //             console.log(a + b + c + d)
    //         }
    //     }

    //     let p1=new Calculator()
    //     p1.addition(2,3)
    //     p1.addition(2,4,7)
    //     p1.addition(2,4,6,8)

        // ===========

    class Calculator {
            addition(a, b, c, d) {
                if (a != undefined && b != undefined && c != undefined && d != undefined) {
                    console.log(a + b + c + d)
                }
                else if (a != undefined && b != undefined && c != undefined) {
                    console.log(a + b + c)
                }
                else if (a != undefined && b != undefined) {
                    console.log(a + b)
                }
            }
        }
let z1=new Calculator()
z1.addition(7,9)    
z1.addition(54,6)