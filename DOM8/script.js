let ullist = document.querySelector('ul')
let addbutton = document.querySelector('#addbutton')
let input = document.querySelector('input')

console.log(ullist)
console.log(addbutton)
console.log(input)

addbutton.addEventListener('click', function () {
    let text = input.value
    let lilist = document.createElement('li')
    lilist.textContent = text
    createButtons(lilist)
    ullist.appendChild(lilist)
    input.value = " "
})

ullist.addEventListener('click', function (event) {

    if (event.target.tagName == "BUTTON") {

        if (event.target.classname == "remove") {
            let liElement = event.target.parentElement
            let ullist = liElement.parentElement
            ullist.removeChild(liElement)
        }
       else if (event.target.classname == "up") {
            let liElement = event.target.parentElement
            let ullist = liElement.parentElement
            let prevli=liElement.previousElementSibling
            if(prevli){

             ullist.insertBefore(liElement,prevli)
            }
        }

        else if (event.target.classname == "down") {
            let liElement = event.target.parentElement
            let ullist = liElement.parentElement
            let nextli=liElement.nextElementSibling
            if(nextli){

             ullist.insertBefore(nextli,liElement)
            }
        }

    }
})


function createButtons(li){

    let remove=document.createElement('button')
    remove.textContent="Remove"
    remove.className="remove"
    li.appendChild(remove)

    let up=document.createElement('button')
    up.textContent="up"
    up.className="up"
    li.appendChild(up)

    let down=document.createElement('button')
    down.textContent="down"
    down.className="down"
    li.appendChild(down)
}