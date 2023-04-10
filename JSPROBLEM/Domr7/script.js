let ulList = document.querySelector('ul')
let buttonone = document.querySelector('#one')
let input = document.querySelector('input')

ulList.addEventListener('click', function (event) {

    if (event.target.tagname === "BUTTON") {

        if (event.target.className === "remove") {
        }
        else if (event.target.className === "up") {

        }
        else if (event.target.className === "down") {

        }
    }
})

buttonone.addEventListener('click', function () {
    let text = input.value
    let newLi = document.createElement('li') 
    newLi.textContent = text 
    createButtons(newLi)
    ulList.appendChild(newLi)
    input.value = ""
})


function createButtons(li) {

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.classList.add("remove") // <button class = "remove">Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.classList.add("up") 
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.classList.add('down')
    li.appendChild(down)
}