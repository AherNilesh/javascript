{/* <h1 id="one" class="head">Fruits</h1>
    <ul>
        <li class="fruit">Apple</li>
        <li class="fruit">Mango</li>
        <li class="fruit">Banana</li>
    </ul> */}

let tagname=document.querySelector('h1')
console.log(tagname)
let byclass=document.querySelector('.head')
let byid=document.querySelector('#one')
let byCoF=document.querySelector('h1[class="head"]')
console.log(byclass)
console.log(byCoF)

let li=document.querySelectorAll('li')
let liB=document.querySelectorAll('.fruit')
console.log(li)
console.log(liB)

for (let i = 0; i < li.length; i++) {
    if (i % 2 == 0) {
        li[i].style.color = "Blue"
    }
    else {
        li[i].style.color = "red"
    }
}

let q1 = document.querySelectorAll('li[name="eat"]')
 console.log(q1)