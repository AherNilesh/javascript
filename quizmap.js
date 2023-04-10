let quiz = new Map(
    [
        ['question', 'answer'],
        ['capital of Mh', 'mumbai'],
        ['capital of Mp', 'bhopal'],
        ['captal of Rj', 'jaipur']
    ]
)
// console.log(quiz.get('capital of Mh'))

// let count = 0
// for (let [k, v] of quiz.entries()) {
//     // console.log(k,v)
//     if (k.startsWith('c')) {
//         let userInput = prompt(k)
//         if (userInput === v) {
//             count = count + 1
//         }
//     }
// }
// if (count === 3) {
//     console.log('gold')
// }
// else if (count === 2) {
//     console.log('silver')
// }
// else if (count === 1) {
//     console.log('bronze')
// } else {
//     console.log('no medal')
// }


let count = 0
for(let [k,v] of quiz.entries()){
    //console.log(k,v)
    if(k.startsWith('c')){
       let userInput =  prompt(k)
       if(userInput === quiz.get(k)){
            count = count + 1
       }
    }
}

if(count === 3){
    console.log('Gold')
}
else if(count === 2){
    console.log('Silver')
}
else if(count === 1){
    console.log('Bronze')
}
else {
    console.log('Please try again')
}