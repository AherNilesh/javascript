//<h2 class = "one"  id = "two" name = "nm">Javascript</h2>
// tagName
let tagName = document.querySelector('h2')
console.log(tagName)

// id
let id = document.querySelector('#two')
console.log(id)

// class
let byclass=document.querySelector('.one')
console.log(byclass)

//css selector
let byName = document.querySelector('h2[name="nm"]')
console.log(byName)

// program1
                    // updating the text of html element
console.log(byName.textContent)
byName.textContent='python'

// program2
           //updating the text of html element on click
byName.addEventListener('click',function(){
    byName.textContent ="aher"
})

// program3
let headingOne = document.querySelector('h1')
console.log(headingOne)
headingOne.addEventListener('mouseover',function(){
    headingOne.style.color = "pink"
})
headingOne.addEventListener('mouseout',function(){
    headingOne.style.color='yellow'
})