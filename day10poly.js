// class Addition {
//         add(x){
//             console.log(x)
//         }
//         add(x,y){
//             console.log(x+y)
//         }
//         add(x,y,z){
//             console.log(x+y+z)
//     }
//      }
//     let a = new Addition()
//      a.add(1,3,4)
     
// same class , same method name different signature (overloading)
class Addition {
    additionA(x,y,z){
        if(x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        } 
        else if( x != undefined && y != undefined){
            console.log(x+y)
        }
        else if(x != undefined){
            console.log(x)
        }
    }
}
let a = new Addition()
a.additionA(5,10,20)
a.additionA(5,10)
a.additionA(5)






// different class , same method same signatur (always inheritance)
class Mother{
    constructor(fn,ln){
        this.firstname=fn
        this.lastname=ln
    }
    displayname(){
        console.log(this.firstname+this.lastname)
    }
}
class Son extends Mother{
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname=sn
    }
    displayname(){
        console.log(this.sname+this.lastname)
    }
}
let raj = new Son("raj","deshpande","rahul")
// console.log(raj)
raj.displayname()