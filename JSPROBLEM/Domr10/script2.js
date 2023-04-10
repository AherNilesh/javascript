{/* <h1 id="one" class="two"></h1>
    <ul>
        <li class = "fr" name = "nm">Apple</li>
        <li>Banana</li>
        <li>Mango</li>
        <li>Grapes</li>
    </ul> */}

    let h1=document.getElementById('one')
    console.log(h1)

// // Html collection
    let html1=document.getElementsByTagName('li')
    console.log(html1)

    let html2=document.getElementsByClassName('fr')
    console.log(html2)


    // nodeList
let html3 = document.getElementsByName('nm')
let nodelist1 = document.querySelectorAll('li')
let nodeList2 = document.querySelectorAll('.fr')

console.log(html3)
console.log(nodelist1)
console.log(nodeList2)