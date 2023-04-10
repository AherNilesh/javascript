// inheritance
class Student {
    firstName = "Nilesh"
    lastName = "aher"
    age = 25
    rollNo = 30
}
class Teacher extends Student {
    skill = "Javascript"
}
let nil = new Student()
console.log(nil)
console.log(nil.age)

// let raj=new Teacher()
// console.log(raj)
// /==================================
class StudentA {
    constructor(firstName, lastName, age, rollNo) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.rollNumber = rollNo
    }
    displayFullName() {
        console.log(this.firstName + this.lastName)
    }
}

class TeacherA extends StudentA {
    skills = ["java", "python", "SQL"]
    displaySkill() {
        console.log(this.firstName)
        console.log(this.skills)
    }
}
let ram = new TeacherA('ram', 'patil', 33, 11)
console.log(ram)
ram.displayFullName()
// ==========================

class StudentB {
        constructor(fn, ln, ag, rn) {
            this.firstName = fn
            this.lastName = ln
            this.age = ag
            this.rollNumber = rn
        }
        displayFullName() {
            console.log(this.firstName + this.lastName)
        }
    }
    
    class TeacherB extends StudentA{
        constructor(fn,ln,ag,rn,skill,salary){
            super(fn,ln,ag,rn)
            this.skills=skill
            this.salary=salary
        }
        displaySkillandSalary(){
            console.log(this.age)
            console.log(this.firstName+this.lastName)
            console.log(this.skills+this.salary)
        }
    }

    let pankaj=new TeacherB('pankaj','kunar',22,2,'js',50000)
    console.log(pankaj)
    pankaj.displaySkillandSalary()

    // ///////////////////////////////
    class StudentC {
        constructor(fullName, adharNo, DOB) {
            this.fullName = fullName
            this.adharNo = adharNo
            this.dateOfBirth = DOB
        }
        display(){
            console.log(this.fullName)
        }
    }
    
    class TeacherC extends StudentC{
        constructor(fullName,adharNo,DOB,salary){
            super(fullName,adharNo,DOB)
            this.salary=salary
        }
        displySalary(){
            console.log(this.fullName)
            console.log(this.salary)
        }
    
    }
    class Professor extends TeacherC{
        constructor(fullName,adharNo,DOB,salary,skill){
            super(fullName,adharNo,DOB,salary)
            this.skill=skill
        }
        displaySkill(){
            console.log(this.skill)
        }
    }
    let pravin=new StudentC('pravin','9901','5/5/3333')
    console.log(pravin)
    pravin.display()

    let sham=new Professor("sham",987654321,"01/02/1900",10000,"HTML")
console.log(sham)
sham.display()
sham.displaySkill()
sham.displySalary()