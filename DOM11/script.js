//<h1 id = "one" class = "heading">Heading</h1>

let tagName=document.querySelector('h1')
let idname=document.querySelector('#one')
let headone=document.querySelector('.heading')
let byc=document.querySelector('h1[name="nm"]')

// getelementbyid()
let byID=document.getElementById('one')
console.log(byID)

//HTMLCollection
let byclassname=document.getElementsByClassName('fruits')
console.log(byclassname)
console.log(byclassname.length)

// node list
let byCss = document.querySelectorAll('.fruits')
console.log(byCss)
console.log(byCss.length)

// tagName
let cssSelector = document.querySelector('li')
console.log(cssSelector)

let tagNames = document.getElementsByTagName('li')
console.log(tagNames)

//document.getElementsByClassName()

let headingTwoElement=document.querySelector('h2')
console.log(headingTwoElement.className)

headingTwoElement.classList.add('headTwob')
console.log(headingTwoElement)

headingTwoElement.classList.remove('headTwob')
console.log(headingTwoElement)

headingTwoElement.className = "new"
console.log(headingTwoElement)