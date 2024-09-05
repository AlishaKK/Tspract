// const URU = `https://simple-books-api.glitch.me/status`
// async function getStatus(){
//     const res = await fetch(URU)
//     if(!res.ok){
//         throw new Error(`Could not fetch ${URL}, status: ${res.status}`)
//     }
//     // console.log(res)
//     const Data = await res.json()

// }
// getStatus()
const URU = `https://simple-books-api.glitch.me/books`
async function getBook(){
    const res = await fetch(URU)
    if(!res.ok){
        throw new Error(`Could not fetch ${URL}, status: ${res.status}`)
    }
    // console.log(res)
    const Data = await res.json()
 console.log(Data)
}
getBook()