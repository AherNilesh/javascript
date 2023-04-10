{/* <h1 id="one" class="two three" name="four">Hi</h1>
<ul>
    <li class = "fr" name ='r'>Apple</li>
    <li class = "fr" name ='r'>banana</li>
    <li class = "fr" name ='r'>papaya</li>
</ul> */}

let head1=document.querySelector('h1')
let classn=document.querySelector('.two')
let byId = document.querySelector('#one')


let idA = document.getElementById('one')
 console.log(idA)

//  all li elements

let nodeList = document.querySelectorAll('li')  
 console.log(nodeList)

let liListByClassName = document.querySelectorAll('.fr')
console.log(liListByClassName)

let nodeList2 = document.getElementsByName('r')
 console.log(nodeList2)


 let html1 = document.getElementsByClassName('fr') 
 console.log(html1)

 let htmlc2 = document.getElementsByTagName('li')
 console.log(htmlc2)


//  /* <h1 id="one" class="two three" name="four">Hi</h1>

let a = document.getElementById('one')
console.log(a)

console.log(a.className)
console.log(a.classList)

a.classList.remove('two')
a.classList.add('four')
a.classList.toggle('four')
console.log(a)

console.log(a.getAttribute('id'))
console.log(a.getAttribute('name'))
