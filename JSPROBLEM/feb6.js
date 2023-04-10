// let student = {
//     firstname: "nilesh",
//     lastname: "aher",
//     age: 22,
//     skills: ["java", "js"]
// }

// //curd
// // retrive
// console.log(student.firstname)

// // update
// student.firstname = "raj"
// console.log(student)

// student.skills.push("python")
// console.log(student)

// // add or create
// student.language="marathi"
// console.log(student)

// // delete
// delete student.age
// console.log(student)


let student = {
    firstname: "nilesh",
    lastname: "aher",
    age: 22,
    skills: ["java", "js"]
}

//     let rollNo=[12,34,56,78,55,44,33,22]
// for(let i=0;i<rollNo.length;i++){
//     console.log(rollNo[i])
// }

// for keys
// for (let key in student) {
//     console.log(key)

// }

// //  for values
// for (let key in student){
//      console.log(student[key])
// }

// // key and value
// for (let key in student){
//     console.log(key,student[key])
// }

 //2 way loop
 for (let key of Object.keys(student)){
    console.log(key)
 }

for(let val of Object.values(student)){
    console.log(val)
}

for(let [a,b] of Object.entries(student)){
    console.log(a,b)
}

// //Map => datatype

let map=new Map()
console.log(map)

//to add element
//1. set()
map.set('firstname','nilesh')
map.set(1,'marathi')
console.log(map)


let s1=map.has(1)
 console.log(s1)

 let s2=map.has('fullName')
 console.log(s2)

 let s3=map.delete(1)
 console.log(s3)
 console.log(map)

 
 