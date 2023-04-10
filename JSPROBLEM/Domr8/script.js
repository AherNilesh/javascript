let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let addButton = document.querySelector('#one')

ulList.addEventListener('click', function (e) {

    if (e.target.tagName === "BUTTON") {

        if (e.target.className === "remove") {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }
        else if (e.target.className == "up") {

            let li = e.target.parentElement
            let ul = li.parentElement
            let preli = li.previousElementSibling

            if (preli) {
                ul.insertBefore(li, preli)
            }


        }
        else if (e.target.className == "down") {

            let li = e.target.parentElement
            let ul = li.parentElement
            let nextli = li.nextElementSibling

            if (nextli) {
                ul.insertBefore(nextli, li)
            }
        }
    }
})

addButton.addEventListener('click',function(){
    let txt = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = txt 
    // function
    creatButton(newLi)
    ulList.appendChild(newLi)
    inputText.value = " "

})

function creatButton(li){
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove"  // <button>Remove</button>
    r.classList.add('remove') // <button class= "remove">Remove</button>
    li.appendChild(r)


    let u = document.createElement('button') 
    u.textContent = "Up"  
    u.classList.add('up') 
    li.appendChild(u)


    let d = document.createElement('button') 
    d.textContent = "Down"  
    d.classList.add('down') 
    li.appendChild(d)


}

