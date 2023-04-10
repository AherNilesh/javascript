let heading1=document.querySelector('h1')
// class
let c1=heading1.className
console.log(c1)

heading1.classList.add('three')
heading1.classList.add("four")
heading1.classList.remove('two') 
heading1.classList.toggle('three')

// {/* <p id="three" name="nm" class="four">paragraph</p> */}
let r = document.querySelector('p')
console.log(r)
let c2 = r.getAttribute('id')
let c3 = r.getAttribute('name')
console.log(c2)
console.log(c3)