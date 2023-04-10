// join() , push() , pop() , shift() , unshift() ,includes()
// map() , filter() , reduce() ,forEach() 
// some() , every() , find() , findIndex()


let cities = ["pune","jaipur","banglore","pune"]
let a = cities.length
console.log(a)
//1. push()
// action  - add the element at last
// return type - new length of array
let q1 = cities.push('goa')
console.log(q1)
console.log(cities)

//2. unshift()
// action - adds the element at first 
// return - new length array
// [ 'pune', 'jaipur', 'bnaglore', 'pune', 'goa' ]

let q2 = cities.unshift('nagpur')
console.log(q2)
console.log(cities)

//3. pop()
//action - removes the last element 
//return - the same element

let vegetable = ["tomato","potato","cabbage","spinach"]
let q3 = vegetable.pop()
console.log(q3)
console.log(vegetable)

//4.shift()
//action -removes the first
//return - same element 

let q4 = vegetable.shift()
console.log(q4)
console.log(vegetable)


//[11,22,33,4]
// push()     ====> new length
// unshift()  ====> new length
// pop()      ====> last element 
// shift()    ====> first element


// 5.includes()
// action -- search for the element 
// return boolean True and False

//               0          1         2
let country = ["India","Pakistan","Srilanka"]
q5 = country.includes('pakistan')
console.log(q5)


//6. join()
// action - joins all element of array 
// return - string 

let info = ["chinmay","deshpande",7709192441]
let q6 = info.join("-") // "chinmay-deshpande-7709192441"
console.log(q6)

let q7 = info.join('@')
console.log(q7)
console.log(typeof q7)


// 7.map() === array
// 8.filter() === array
// 9.reduce() === single value

// let arr = [11,22,33,44,55,66,77,88]
// //[12,23,34,45,56,67,78,89]
// let e1 = arr.map(function(el,index,arr){
//     return el + 1
// })
// console.log(e1)

// let names = ["chinmay","amol",'sumit','ram']
// //[7,4,5,3]
// let e2 = names.map(function(el){
//     return el.length
// })
// console.log(e2)

// 8. filter()
 let arr2 = [11,22,33,44,55,66,77,88]
let e3 = arr2.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(e3)

let names2 = ["chinmay","amol",'sumit','ram']
let e4 = names2.filter(function(el){
    return el.length ==7
})
console.log(e4)


// 9.reduce()
let arr3 = [11,22,33]
let e5 = arr3.reduce(function(acc,el){
    return el + acc
},0)
console.log(e5)


// map() === array
// filter() === array
// reduce() === single value