function createUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Id retrive')
        },2000)
    })
}
function getInfo(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('got info ')
        },1000)
    })
}
createUser()
.then(function(res){
    console.log(res)
    return  getId()
})
.then(function(res){
    console.log(res)
    return getInfo()
})
.then(function(res){
    console.log(res)
})