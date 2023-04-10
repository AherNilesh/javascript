// async & sync using promise

function renderHtml(el) {
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h2>${el.first_name}</h2>`)
    document.write(`<h2>${el.last_name}</h2>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<img src =${el.avatar}>`)

}
function getUserPage(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (responce) {
            return responce.json()
        })
}
function getUserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (responce) {
            return responce.json()
        })
}
// getUserPage(1)
//     .then(function (res) {
//         console.log(res.data[0].id)
//         return res.data[0].id
//     })
//     .then(function (id) {
//         return getUserInfo(id)
//     })
//     .then(function (res) {
//         console.log(res)
//         renderHtml(res.data)
//     })

async function getInfo2(pageNumber) {
    let res = await getUserPage(pageNumber)
    let ida = res.data[0].id
    let resp = await getUserInfo(ida)
    renderHtml(resp.data)
}
getInfo2(1)