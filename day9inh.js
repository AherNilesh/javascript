// class Grandfather{
//     firstname="nil"
//     lastname="aher"
//     displayname(){
//         console.log(this.firstname+this.lastname)
//     }
// }
// class Father extends Grandfather{
//     Fatherfirstname="ram"
//     displaynamefather(){
//         console.log(this.Fatherfirstname+this.lastname)
//     }
// }
// class Son extends Father{
//     sonfirstname="rahul"
//     displaynameson(){
//         console.log(this.sonfirstname+this.lastname)
//     }
// }
// let rahul=new Son()
// // console.log(rahul)
// console.log(rahul.firstname)
// console.log(rahul.Fatherfirstname)
// console.log(rahul.sonfirstname)
// console.log(rahul.lastname)

// rahul.displayname()
// rahul.displaynamefather()

// let ram=new Father()
// console.log(ram.firstname)
// console.log(ram.Fatherfirstname)
// console.log(ram.lastname)

// ram.displayname()
// ram.displaynamefather()
// ----------------------------------------------------

// prog.2

// class Grandfather {
//     constructor(fn, ln) {
//         this.firstname = fn
//         this.lastname = ln
//     }
//     displayname() {
//         console.log(this.firstname + this.lastname)
//     }
// }
// class Father extends Grandfather {
//     fatherfname = "raj"
// }
// let raj = new Father("pankaj", 'ghumare')
// raj.displayname()
// ------------------------
// progrm-3
// class Grandfather {
//     constructor(fn, ln,) {
//         this.firstname = fn
//         this.lastname = ln
//     }
//     displayname() {
//         console.log(this.firstname + this.lastname)
//     }
// }
// class Father extends Grandfather {
//     constructor(fn, ln, fatherfname) {
//         super(fn, ln)
//         this.fatherfname = fatherfname

//     }
//         displaynamefather(){
//             console.log(this.fatherfname + this.lastname)

//         }
//     }
// class Son extends Father {
//     constructor(fn, ln, fatherfname,sonfname) {
//         super(fn, ln,fatherfname)
//         this.sonfname = sonfname

//     }
//     displaynameson(){
//         console.log(this.sonfname + this.lastname)

//     }
// }
// let prashant=new Son("nil","aher","raj","ram")
// // console.log(prashant)
// prashant.displaynamefather()

// --------------------------------------------
class Mother{
    constructor(fn,ln){
        this.firstname=fn
        this.lastname=ln
    }
    displayMname(){
        console.log(this.firstname+this.lastname)
    }
}
class Son extends Mother{
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname=sn
    }
    displaySname(){
        console.log(this.sname+this.lastname)
    }
}
class Daughter extends Mother{
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname=dn
    }
    displaydname(){
        console.log(this.dname+this.lastname)
    }
}
let rahul = new Son("kanchan","deshpande","rahul")
let radika = new Daughter("kanchan","deshpande","radika")
console.log(rahul)