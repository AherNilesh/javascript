let bodyele=document.querySelector('body')
console.log(bodyele)

bodyele.addEventListener('click',function(event){
    console.log(event.target)
    console.log(event.target.tagName)
    console.log(event.target.id)
    console.log(event.target.textContent)
})