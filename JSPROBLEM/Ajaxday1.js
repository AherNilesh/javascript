function additionA() {
    console.log("A is printed")
}

function additionB() {
    console.log("B is printed")
}

additionA()
additionB()

// program 2
function additionC() {
    setTimeout(function () {
        console.log('c is printed')
    }, 2000)

}
function additionD() {
    console.log('D is printed')
}
// additionC()
// additionD()

// / Asyn in nature 
function printinfo() {
    setTimeout(function () {
        console.log('user created')
    }, 3000)

    setTimeout(function () {
        console.log('get id')
    }, 2000)

    setTimeout(function () {
        console.log('get info by id')
    }, 1000)
     }
    //  printinfo()

    // =======================

    function printinfo() {
        setTimeout(function () {
            console.log('user created')
            setTimeout(function () {
                console.log('get id')
                setTimeout(function () {
                    console.log('get info by id')
                }, 1000)
            }, 2000)
        }, 3000)
    }
    printinfo()
