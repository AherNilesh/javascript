// let Lielement=document.querySelector('li')
// console.log(Lielement)

// let allelement=document.querySelectorAll('li')
// console.log(allelement)

// let newLi=allelement[0].parentNode.appendChild(document.createElement('li'))
// console.log(newLi)

// console.log(allelement)
// console.log(allelement.length)

// ul.appendChild(li)


let htmlCollection=document.getElementsByTagName('li')
console.log(htmlCollection)
console.log(htmlCollection.length)

htmlCollection[0].parentNode.appendChild(document.createElement('li'))
console.log(htmlCollection)
 console.log(htmlCollection.length)


 let b=document.getElementsByClassName('tenth')
console.log(b)

// /////////////////////////////////////////////
let a=document.getElementById('one')
console.log(a)
// //////////////////////////////////

{/* <p class="para">Pragraph</p> */}

let pElement=document.querySelector('.para')

console.log(pElement)

console.log(pElement.classList)

// to add new class
pElement.classList.add('tennnsss')
console.log(pElement.classList)


//to remove class
pElement.classList.remove('tennnsss')
console.log(pElement.classList)


//toggle 

pElement.classList.toggle('tenthClass')
console.log(pElement.classList)

