// 10.forEach()
let city = ["pune","mumbai","banglore","kolkata"]
city.forEach(function(el,index,arr){
    console.log('welcome '+ el)
})

//          0   1  2  3  4  5  6   7   8
let arr4 = [33,44,51,33,44,55,222,444,555]
let e6 = arr4.filter(function(el){
    return el > 100
})
console.log(e6)

//11.find
let e7 = arr4.find(function(el){
    return el > 100
})
console.log(e7)

//12.findIndex 
let e8 = arr4.findIndex(function(el){
    return el > 100
})
 console.log(e8)


//13. some---------------------------boolean
let arr5 = [22,33,11,22,33,44,55,66,7,77]
let e9  = arr5.some(function(el,index,arr){
    return el > 500

})
console.log(e9)

// 14.every
let e10 = arr5.every(function(el,index,arr){
    return el > 50
})
console.log(e10)

// map() == array
// filter() == array 
// reduce() == single value 
// forEach() == undefined
// some() == boolean value 
// every() == booela value 
// find() == first occurence where condition is true
// findIndex ==first occurence index number where condition is true


//15. concat()

let arr6 = [1,2,3]
let arr7 = [11,22,33]
let e11 = arr6.concat(arr7)
// console.log(e11)

let e12 = arr7.concat(arr6)
console.log(e11)

// ==> array
//16. reverse()

let countries = ["India","pakistan","srilanka","Nepal"]
let e13 =countries.reverse()
console.log(e13)

// 17.sort()
let e14 = countries.sort()
console.log(e14)


let animals = ["tiger" ,"lion","snake","panthar",'rabbit']
//             -5         -4      -3       -2       -1

// 18.slice()

//animals.slice(startValue,endValue(not included))
let e10 = animals.slice(1)
let e11 = animals.slice(1,4)
// let e12 = animals.slice(0,-1)
// let e13 = animals.slice(-3)
// let e14 = animals.slice(-5,-2)
// let e15 = animals.slice(-5,2)
// let e16 = animals.slice(-1,-5)
console.log(e10)
console.log(e11)
// console.log(e12)
// console.log(e13)
// console.log(e14)
// console.log(e15)
// console.log(e16)


//19.splice()

//             0        1        2       3      4
let names = ["amit","akshar","abhinav","ram","rakesh"]

//names.splice(startIndex,numberOfToBeDeleted)
//names.shift()
//names.pop()
//names.splice(1,2)
//names.splice(2,2)
//console.log(names)

// delete element on index 1
// names.splice(1,1)
// console.log(names)

// delete and replace
names.splice(2,2,"chinmay","amol")
console.log(names)
//20. flat()

//              0           1          2
//           0  1  2    0  1   2   0   1  2
let arr20 = [[11,22,33],[44,55,66],[77,88,99]]
// console.log(arr20[0][2])
// console.log(arr20[1][2])
// console.log(arr20[2][2])
let e17 = arr20.flat()
console.log(e17)
// 21.indexOf()

let e18  = [11,33,44,55,66]
let e19 = e18.indexOf(44)
console.log(e19)

// 22.at()
let vegetable = ["carrot","cabbage","cauliflower"]
let e20 = vegetable.at(1)
console.log(e20)