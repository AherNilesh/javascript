class PersonA {
    firstname = undefined
    lastname = undefined
    age = undefined
}
let amol = new PersonA()
console.log(amol)
amol.firstname = "amol"
amol.lastname = "ghumare"
amol.age = "32"
 console.log(amol)
// console.log(amol instanceof PersonA)


// =========================
class PersonB {
    // constructor() {
    //     console.log("called")
 // }
 constructor(fn,ln,rollno){
    this.firstname=fn
    this.lastname=ln
    this.rollno=rollno
 }
}
let ram=new PersonB("ram","pansare",11)
console.log(ram)

let students=[
    new PersonB('nil','aher',21),
    new PersonB('nil2','aher2',22),
    new PersonB('nil3','aher3',23),
    new PersonB('nil4','aher4',24)
]
students.forEach(function(el){
    console.log(el.firstname)
    console.log(el.lastname)
    console.log(el.rollno)
})


let newstudents={
    student1:new PersonB('s1','l1','5'),
    student2:new PersonB('s2','l2','6'),
    student3:new PersonB('s3','l3','7'),
    student4:new PersonB('s4','l4','8')
}
for(let [k,v] of Object.entries(newstudents.student3)){
    console.log(k,v)
}

// set and get method
class PersonC{
    setfname(fn){
        this.firstname=fn
    }
    setlname(ln){
        this.lastname=ln

    }
    setage(ag){
        this.age=ag
    }
}
let nilesh=new PersonC()
console.log(nilesh)
nilesh.setfname('nilesh')
nilesh.setlname('aher')
console.log(nilesh)


// set  and get keyword

class PersonD {

    set fname(fn){
        this.firstName = fn
    }
    set lname(ln){
        this.lastName = ln
    }
    set Age(ag){
        this.age = ag
    }
}
let rahul=new PersonD()
console.log(rahul)
rahul.fname="pankaj"
rahul.age="55"

 console.log(rahul)
