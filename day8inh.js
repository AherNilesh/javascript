// inhertance
// program -1
class Student {
    firstname = "Nil"
    lastname = "aher"
    age = 22

    displayname() {
        console.log(this.firstname + this.lastname)
    }
}
class Teacher extends Student {     // inheriting from student 
    adharcard = 12345
    salary = 45000
}
class Professor extends Teacher {
    skills = "english"
}
let nilesh = new Professor()
console.log(nilesh)
nilesh.displayname()


//  program -2

class StudentA {
    constructor(fn, ln, ag) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
    }
    displayname() {
        console.log(this.firstname + this.lastname)
    }
}
class TeacherA extends StudentA {
    adharcard = 54321
    salary = 50000
}
let pankaj = new TeacherA("pankaj", 'ghumare', 32)
console.log(pankaj)
pankaj.displayname()


// program-3

class StudentB {
    constructor(fn, ln, ag) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
    }
    displayname() {
        console.log(this.firstname + this.lastname)
    }
}
class TeacherB extends StudentB {
    constructor(fn, ln, ag, adcard) {
        super(fn, ln, ag)
        this.adharcard = adcard
    }
}
let pravin = new TeacherB("pravin", "gunjal", 25, 67890)
console.log(pravin)
// let pravin=new StudentB("pravin", "gunjal", 25)
// console.log(pravin)