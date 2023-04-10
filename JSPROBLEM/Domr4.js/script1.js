{/* <h1 id="one">color</h1>
    <input type="text">
    <button>change me</button> */}

    let id1=document.querySelector('#one')
    console.log(id1)

    let inputBox = document.querySelector('input[type="text"]')
    console.log(inputBox)

    let button1 = document.querySelector('button')
    console.log(button1)

    button1.addEventListener('click',function(){
        let userentervalue=inputBox.value
        id1.textContent=userentervalue
        id1.style.color=userentervalue
        inputBox.value=""
    })