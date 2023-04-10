let buttonA = document.querySelector('button')
let liElements = document.querySelectorAll('li')
console.log(liElements)

buttonA.addEventListener('click', function () {
    for (let i = 0; i < liElements.length; i++) {
        console.log(liElements[i].textContent)
        liElements[i].style.color = "pink"

    }
})