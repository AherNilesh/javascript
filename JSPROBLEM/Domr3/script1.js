{/* <h1 class="one">student</h1>
    <button id="btn">click me</button> */}

    let class1=document.querySelector('.one')
    console.log(class1)

    let button=document.querySelector('#btn')
    console.log(button)

    button.addEventListener('click', function () {
        class1.textContent = "nil is student"
        class1.style.color = "red"
        class1.style.backgroundColor = "blue"
    })