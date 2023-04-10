let ullist = document.querySelector('ul')
let buttonid = document.querySelector('#addbutton')
let inputelement = document.querySelector('input')

buttonid = addEventListener('click', function () {
    let text = inputelement.value
    let liElement = document.createElement('li')
    liElement.textContent = text
    createButtons(liElement)

    ullist.appendChild(liElement)
    inputelement.value = " "
})

function createButtons(li) {
    let r = document.createElement('button')
    r.textContent = "Remove" 
    r.className = "remove" 
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "up" 
    u.className = "up" 
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down" 
    d.className = "down" 
    li.appendChild(d)
}