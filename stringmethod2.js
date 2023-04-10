//4. indexOf(arug1, arug2)  // str / subStr
// arug1 = chara, substring
// arug2 = Start point

let z = "javaScript"
console.log(z.indexOf("v"))

console.log(z.indexOf("a")) // 1
console.log(z.indexOf("a", 1))  // 1
console.log(z.indexOf("a", 2))

z = "jvScraiapt"
console.log(z.indexOf("a", 4))  //5




//3. includes(arug) 
// arug - Chara or subStr

// Action = char or substring finding/checking inside the string
// Return = true/false (Boolean)

let b = "nilesh"
console.log(b.includes("S"))  // false
console.log(b.includes("sh")) // true
console.log(b.includes("les"))  // true

// 15 replace()
let lang = "javaScript"
console.log(lang.replace("a", "z"))  // jzvaScript
console.log(lang)  // "javaScript"

//16. ReplaceAll
let lange = "javaScraiptaaaaa"
console.log(lange.replaceAll("a", "z"))


 let eg = "Hi nilesh"
 console.log(eg.replace("esh", "Ganesh"))

 //17. charCodeAt(arug1)
// arug1 - index no

// Action = gives the char at index
// Return = Asccii Value  (Number)

let e = "@String"
console.log(e.charCodeAt(1)) // S ---> 83    
console.log(e.charCodeAt(0))  // @ ---> 64


// . split(arug1)
// Arug1 - String  (optional)

//Action = string split in passed parameter
//return = Array

// .split()
// .split("")
// .split(" ")
// .split("a")
// .split("ar")

let s = "@Strin|g"
console.log(s.split(" "))  // [ '@Strin|g' ]
console.log(s.split(""))  // ['@', 'S', 't','r', 'i', 'n','|', 'g']
console.log(s.split()) // Array  --> [ '@Strin|g' ]

f = "Hi @Strin|g"
console.log(f.split("i"))  //  [ 'H', ' @Str', 'n|g' ]
console.log(f.split(" ")) // [ 'Hi', '@Strin|g' ]
console.log(f.split(""))  //  
// console.log(b.split("n|")) //  [ 'Hi @Stri', 'g' ]



// 18. concat(arug1, arug2)
// arug1 - joiner
// arug2 - join

//Action = joins two or more strings:
//return = String

let a = "hi"
let d = "Good"
let c = "Good"
console.log(a.concat(" ", d))  // hi Good
console.log(a + " " + d) // hi Good

console.log(a.concat("", d)) //  hiGood
console.log(a.concat(20,35, d)) // hi20Good

// console.log(a.concat(20, b, c)) // hi20GoodGood



//19. padStart(arug1, arug2)
// arug1 = length
// arug2 = value (for padding)

//Action = Before the base string Repeating the value upto (length-1)
//return = String

let q = "Hi"
console.log(q.padStart(5, "z"))  // "zzzHi"
console.log(q.padStart(10, "zx")) // zxzxzxzxHi
console.log(q.padStart(10))

// console.log(a.padStart(9, "zx"))  // zxzxzxzHi

 console.log(q.padStart(4, 2)) // "22Hi"

// // Applying on number
// let b = 10
// let z = b.toString()
// console.log(z, typeof(z))  // 10, String
// console.log(z.padStart(4, 2)) // "2210"


//20. padEnd(arug1, arug2)
// arug1 = length
// arug2 = value (for padding)

//Action = After the base string Repeating the value upto (length-1)
//return = String

let v = "Hi"
console.log(v.padEnd(5, "z"))  // "Hizzz"
console.log(v.padEnd(10, "zx")) // Hizxzxzxzx

console.log(v.padEnd(9, "zx"))  // Hizxzxzxz

console.log(v.padEnd(4, 2)) // "Hi22"
console.log(v.padEnd(3, 2))

// Applying on number
let n = 10
let m = n.toString()
console.log(m, typeof(m))  // 10, String
 console.log(m.padEnd(4, 2)) // "1022"