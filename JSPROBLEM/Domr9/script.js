let ul = document.querySelector('ul')
let AddMe = document.querySelector('#btn')
let inputbox = document.querySelector('input')

AddMe.addEventListener('click', function () {
    let text = inputbox.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    creatButtons(newLi)
    ul.appendChild(newLi)
    inputbox.value = ""
})

// last 
ul.addEventListener('click', function (event) {
    // console.log(event.target)
    if (event.target.tagName == "BUTTON") {
        if (event.target.className == "remove") {
            let li = event.target.parentElement //li
            let ul = li.parentElement //ul
            ul.removeChild(li)
        }

       else if (event.target.className = "up") {
            let li = event.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if (prev) {
                ul.insertBefore(li, prev)
            }
        }

        else if (event.target.className === "down") {
            let li = event.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            if (next) {
                ul.insertBefore(next, li)
            }
        }
    }
})


{/* <button class="remove">Remove</button>
        <button class="up">Up</button>
        <button class="down">Down</button> */}

function creatButtons(element) {
    let remove = document.createElement('button')
    remove.textContent = "Remove"
    remove.className = "remove"
    element.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.className = "up"
    element.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.className = "down"
    element.appendChild(down)
}        