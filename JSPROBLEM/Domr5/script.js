// program-1
let ullist=document.querySelector('ul')
console.log(ullist)
let inputBox=document.querySelector('input')
console.log(inputBox)
let btn = document.querySelector('button')
console.log(btn)

btn.addEventListener('click', function () {
    let text = inputBox.value 
    let newLi = document.createElement('li') 
    newLi.textContent = text 
    ullist.appendChild(newLi)
    inputBox.value=""
})