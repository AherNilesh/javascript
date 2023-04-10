let ullist = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonB = document.querySelector('button')
console.log(ullist)
console.log(inputText)
console.log(buttonB)

buttonB.addEventListener('click', function () {
    let text = inputText.value
    // console.log(text)
    let liElement = document.createElement('li') 
    liElement.textContent = text 
    ullist.appendChild(liElement)
    inputText.value = " "
})