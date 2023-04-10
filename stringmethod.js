// In js everything is object 
// Property and method
// let a = "amol"
// // 0   1   2   3 
// // a   m   o   l 
// console.log(a[0]) // 'a'
// console.log(a[1]) // 'm'
// for(let i = 0 ; i < a.length ; i++){
//     //console.log(i)
//     console.log(a[i])
// }


let city="pune"
// console.log(city.length)
let rev=""
for(let i=0;i<city.length;i++){
    // console.log(i)
    // console.log(city[i])
    rev=city[i]+rev
}
console.log(rev)



rev2 = ""
for(let i = city.length -1 ; i >= 0 ; i--){
    //     console.log(i)
    //    console.log(city[i])
         rev2 = rev2+  city[i]
//         //    ''  +   e     =====> e
//         //      e +    n    =====> en
//         //     en  +    u   =====> enu
//         //     enu +    p   ======> enup
    
 }
 console.log(rev2)