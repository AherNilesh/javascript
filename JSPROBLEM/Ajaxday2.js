// program1
function additionA(){
        console.log("A is printed")
    }
    function additionB(){
        console.log("B is printed")
    }
    additionB()
    additionA()

    // program 2
function additionC(){
    setTimeout(function(){
        console.log("printes c")
    },2000)

}function additionD(){
    console.log('print d')
}
// additionC()
// additionD()

// program3 
function additionE(){
    setTimeout(function(){
        console.log('user created')
    },3000)

    setTimeout(function(){
        console.log('get id')
    },2000)

    setTimeout(function(){
        console.log('get info by id')
    },1000)
}
// additionE()
// callback hell
// execute async.code synchroously---tightly couple

function additionE() {
        setTimeout(function(){
            console.log('user created')
            setTimeout(function () {
                console.log('get id')
                setTimeout(function () {
                    console.log('get info by id')
                }, 1000)
            }, 2000)
        }, 3000)
    }
    // additionE()

 // promies ---- pending 
// resolve 
// reject
 
let pro=new Promise(function(resolve,reject){
    let a=50
    let b=50
    if(a==b){
        resolve('complete promise')

    }
    else{
        reject('promise not complete')
    }
})
pro.then(function(a){
    console.log(a)
},function(b){
    console.log(b)
})


let pro2 = new Promise (function(resolve,reject){
        let city = 'pune'
        if(city.includes('p')){
            resolve([11,22,33])
        }
        else {
            reject([-11,-12,13])
        }
    })
    pro2.then(function(a){
        console.log(a[0])
    },function(b){
        console.log(b[1])
    })


    let pro3 = new Promise(function (resolve, reject) {
            let city = 'pune'
            if (city.includes('a')) {
                resolve([11, 22, 33])
            }
            else {
                reject([-11, -12, 13])
            }
        })
        pro3
        .then(function(a){
            console.log(a[0])
        })
        .catch(function(b){
            console.log(b[2])
        })
        .finally(function(){
                console.log("i will execute")
            })

// ============================
function createuser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },3000)

    })
}
function getid(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get id')
        },2000)

    })
}
function getinfobyID(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('getinfo by id')
        },1000)

    })
}
createuser()
.then(function(a){
    console.log(a)
    return  getid()
})
.then(function(b){
    console.log(b)
    return getinfobyID()
})
.then(function(c){
    console.log(c)
})
.catch(function(){
    console.log('rejected')
})
.finally(function(){
    console.log('finally')
})