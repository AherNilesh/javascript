// retrive
// tagName
// {/* <h1 id="one" class="two" name="nm">Headone</h1> */}
let headonetag = document.querySelector('h1')
let idn = document.querySelector('#one')
let classn = document.querySelector('.two')
let nm = document.querySelector('h1[name="nm"]')
let nodeList = document.querySelectorAll('.fruits')
// console.log(headonetag)
// console.log(idn)
// console.log(classn)
// console.log(nm)
// console.log(nodeList)
let e1=document.getElementById('one')
console.log(e1)

let liList = document.getElementsByTagName('li')
console.log('li')
let liListnl = document.querySelectorAll('li')
console.log(liListnl)

let className = document.getElementsByClassName('fruits')// Html collection

let classNameNl = document.querySelectorAll('.fruits') // nodeList
console.log(className)
console.log(classNameNl)

// retrive
let headtwo=document.querySelector('h2')
let text=headtwo.className
console.log(text)

// add class
headtwo.classList.add('four')
headtwo.classList.add('five')

// remove class
 headtwo.classList.remove('five')

// update
headtwo.className="seven"

// toggle
 headtwo.classList.toggle('five')
 headtwo.classList.toggle('five')

//  class attribute
let head3=document.querySelector('h3')
head3.classList.add('yu')






