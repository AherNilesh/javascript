// program1(index.html)
//<h1 id="one" class="two" name="three">HEADING</h1> 
// id
// let idf=document.querySelector('#one')
// console.log(idf)
// // class
// let classf=document.querySelector('.two')
// console.log(classf)
// // tagname
// let tagnamef=document.querySelector('h1')
// console.log(tagnamef)
// //  tagName[attribute = "name"]
//  let nameF = document.querySelector('h1[name="three"]')
//  console.log(nameF)



//  nameF.addEventListener('click',function(){
//     nameF.style.color="orange"
//     nameF.textContent="priya"
//  })



// program 2 (index2.html)
// selecting the element
let headOne = document.querySelector('h1')
let buttonTwo = document.querySelector('button')
// console.log(headOne)
// console.log(buttonTwo)
buttonTwo.addEventListener('click',function(){
    headOne.style.color = "blue"
    headOne.textContent = "raja"
    headOne.style.background = "green"
})
