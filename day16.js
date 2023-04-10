// reset operator
function displayNames(a,b,c,d,e){
    console.log("welcome "+ a)
}
displayNames("pune","delhi","banglore","kolkata","chennai")


function displayNames(...a){
    console.log(a)
    a.forEach(function(el){
        console.log('welcome '+el)
    })
}
displayNames("pune","delhi","banglore","kolkata","chennai")


let cities = ["banglore","delhi","kolkalata","chennai"]
//["banglore","delhi","kolkalata","chennai"] ===> banglore , delhi
function firstTwoCity(a,b,c){
    console.log("welcome "+a)
    console.log("welcome "+b)
    console.log("welcome "+c)
}
firstTwoCity(...cities)