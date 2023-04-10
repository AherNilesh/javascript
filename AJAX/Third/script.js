function renderHtml(el) {
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h2>${el.first_name}</h2>`)
    document.write(`<h2>${el.last_name}</h2>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<img src =${el.avatar}>`)
}
function getUserPageWise(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (responce) {
            return responce.json()
        })
}
function  singleUserInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
}
// getUserPageWise(2)
//     .then(function (res) {
//         return res.data[0].id
//     })
//     .then(function (id) {
//         return singleUserInfo(id)
//     })
//     .then(function (res) {
//         console.log(res.data)
//         renderHtml(res.data)
//     })

async function getInfo(pageNumber) {
    let Z = await getUserPageWise(pageNumber)
    let id = Z.data[0].id
    let obj = await singleUserInfo(id)
    renderHtml(obj.data)
}
getInfo(1)