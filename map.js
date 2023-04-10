// map
// let mapM = new Map()
// console.log(mapM)
// console.log(mapM.size)

mapM.set(1,'admin')
console.log(mapM)
mapM.set('nil',21)
console.log(mapM.size)
g=mapM.get('nil')
console.log(g)
// console.log(mapM.clear())

let g2=mapM.has(1)
console.log(g2)

mapM.forEach(function(el){
    console.log(el)
})



let beta=new Map([
    ['a','zebra'],
    ['b','xerox'],
    ['c','ytara']
])
console.log(beta)
beta.forEach(function(el){
    console.log(el)
})

for(let property of beta.keys()){
    console.log(property)
}
for(let [p,v] of beta.entries()){
    console.log(p,v)
}