let names = ["nil", "rahul", "rajesh"]
console.log(names)

// Set---------------------------------
let s1 = new Set()
console.log(s1)

//1. add - to add elements to the set
s1.add("ram")
s1.add("rahul")
s1.add("rana")
console.log(s1)

// .................................................
let setS = new Set()
console.log(setS)
// property--> size
// let nil=setS.size
console.log(setS.size)  // 0

setS.add('karnataka')
setS.add('mumbai')
setS.add('nagpur')
setS.add('banglore')
setS.add('kolkata')
console.log(setS)
console.log(setS.size)

//2.has() -----------to check whether the element is present or not  
let s2 = setS.has('mumbai')
let s3 = setS.has('wardha')
let s4 = setS.has('kolkata')
console.log(s2)//TRUE
console.log(s3)//FALSE
console.log(s4)

//3.delete() --------deleting the particular element
console.log(setS)
setS.delete('nagpur')
console.log(setS)

// 4.clear-------------clearing the complete set
//  setS.clear()
// //  console.log(setS)

// 5.forEach
//  let city = ["pune","banglore", "mumbai","banglore","kolkata","nagur"]
// city.forEach(function(el){
//     console.log(el)
// })
setS.forEach(function (el) {
    console.log(el)
})

// entries() , keys() , values()
let student = {
    firstName: "nil",
    lastName: "aher",
    age: 22,
    lang: "marathi"
}

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))


for(let property of Object.keys(student)){
    console.log(property)
}
for(let value of Object.values(student)){
    console.log(value)
}
for(let item of Object.entries(student)){
    console.log(item)
}


// 2nd way to define set
let setD = new Set(["nil", "aher", "rahul"])
console.log(setD)

setD.forEach(function(el){
    console.log(el)
})


let student2={
    firstName:"nitin",
    lastName:"aherr",
    age:29
}
for(let key of Object.keys(student2)){
    console.log(key)
}
for(let value of Object.values(student2)){
    console.log(value)
}
for(let [k,v] of Object.entries(student2)){
    console.log(k,v)
}

let setF = new Set(
    [
       {
            firstName:"nilesh",
            lastName:"aher"
        },
        {
            firstName:"sun",
            lastName:"moon"
        }
    ]
)
console.log(setF)
for(let {firstName,lastName} of setF.keys()){
    console.log(firstName,lastName)
}
