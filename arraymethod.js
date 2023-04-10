let birthYear = [1989, 1990, 1991, 1992]
//[33,32,31,30]
let ages = []
for (let i = 0; i < birthYear.length; i++) {
// console.log(i)
    // console.log(2022 - birthYear[i])

 let a = 2022 - birthYear[i]
     ages.push(a)
 }
console.log(ages)


// let birthYear = [1989, 1990, 1991, 1992]
// let q1=birthYear.unshift(1)
// console.log(q1.birthYear)


//  map()
// birthYear = [1989, 1990, 1991, 1992]
// let q1 = birthYear.map(function (el, index, arr) {
//     //  console.log(el,index,arr)
//      return 2022 - el
// })
//  console.log(q1)



//  let number=[12,12,13,14,11,16]
// let q2=number.map(function(el,index,arr){
//     return el+5
// })
// console.log(q2)


//   