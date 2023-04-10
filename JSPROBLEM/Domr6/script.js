let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input')
let addmebtn = document.querySelector('#addmebtn')

addmebtn.addEventListener('click', function () {
let text = inputBox.value
    let newLI = document.createElement('li')

    ulList.appendChild(newLI)
})