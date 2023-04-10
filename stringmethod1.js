//1. toLowerCase()
let country2 = "ausTralia"
let q1 = country2.toLowerCase()
console.log(country2.toLowerCase())
console.log(q1)


let ind = "maHaRaTra"
//  let q2=ind.toLowerCase()


console.log(ind.toLowerCase())

//2 toUppercase()
let ind2 = "RAJaStaN"
console.log(ind2.toUpperCase())

// 3. includes()
let ind3 = "nilaher"
console.log(ind3.includes('a'))
console.log(ind3.includes('t'))
console.log(ind3.indexOf('h'))

// 4 indexOf()
let country4 = 'cuba' 
console.log(country4.indexOf('u'))
console.log(country4.indexOf('l'))


//5 charat()
let city5 = "Nagpur"
let q6 = city5.charAt(3)
console.log(q6)

let b = "String"
console.log(b.charAt(0))  // S
console.log(b.charAt(3)) // i

console.log(b.charAt(6))  // empty string
console.log(typeof(b.charAt(6))) // string

//6 slice()
let city8 = "chandrapur"
//console.log(city8.slice(startPostion,endPosition))
console.log(city8.slice(2))
console.log(city8.slice(2,5))

//7. substring(startPoint, EndPoint)  // index no.
// Works with only +ve indexing ( below the zero consider only zero)
// we cant pass -ve index
// endPoint not including

// Action = Cut the string by requirement
// Return = Sliced sub-string

// var str = " Hi Ganesh "
// console.log(str.substring(-7))  //  " Hi Ganesh "
//  console.log(str.substring(1, 3))  // Hi

//-----------------------------
//8. substr(startPoint, length)

// Action = Cut the string by requirement
// Return = Sliced sub-string

// let str = " Hi Ganesh "
// console.log(str.substr(4, 6)) // Ganesh

// let string = "Hi Ganesh"
// console.log(string.substr(0, 2))  // Hi

// console.log("Name".substr(0, 2)) // 'Na'
// console.log("Name".substr(0, 4)) // 'Name'
// console.log("Name".substr(-4, 4)) // 'Name'  --> works -ve indexing
// console.log("Name".substr(-2, 4)) // 'me'
// console.log("Name".substr(-2)) // 'me'
// console.log("Name".substr(0)) // 'Name'


//9 split()
let info = "chinmay-deshpande-770192441"
console.log(info.split('-'))




//10 trim() ,11 trimStart() , 12 trimEnd()

let info3 = " Maharatra "
console.log(info3.length)    
let info4 = info3.trim()
console.log(info4)

let info5 = info3.trimStart()
console.log(info5.length)

let info7 = info3.trimEnd()
console.log(info7.length)



// 13.startsWith(arug) // str / subStr
// arug - sub-string

// Action = Checking start with given Chara/Substring
// Return = True/False (Boolean)

let city = "Solapur"
console.log(city.startsWith("K"))  // false
console.log(city.startsWith("So"))


//14 endsWith()
let city2 = "Solapur"
console.log(city2.endsWith("r"))  // true
console.log(city2.endsWith("ur")) 


