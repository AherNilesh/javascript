let a = document.querySelector('p')
console.log(a)

let allP = document.querySelectorAll('p')
console.log(allP)

for(let i=0;i<allP.length;i++){
    // console.log(allP[i])
    console.log(allP[i].textContent)
    allP[i].style.color="yellow"
    allP[i].textContent=allP[i].textContent.toUpperCase()
}