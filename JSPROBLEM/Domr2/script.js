// <p class="frd" id="para" name="nilesh">i am learning javascript</p>

//1. by tagname
let bytagname=document.querySelector('p')
console.log(bytagname)

//2. by className
let byclassname=document.querySelector('.frd')
console.log(byclassname)

//3. by id
let byid=document.querySelector('#para')
console.log(byid)

//4. common formula
//tagName[attribute="value"]
let bycommonformula=document.querySelector('p[name="nilesh"]')
console.log(bycommonformula)

let text=document.querySelector('h3[name="textonly"]')
console.log(text)

let text1=document.querySelector('h3').textContent
console.log(text1)


//program1
// bytagname.addEventListener('click',function(){
//     bytagname.textContent="pravin"
// })

//program 2
byclassname.addEventListener('click',function(){
    byclassname.textContent=byclassname.textContent.toUpperCase()
    bytagname.style.color="red"
})