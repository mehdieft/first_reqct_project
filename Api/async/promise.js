// const number = 1001
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (number % 2 == 0) resolve(number)
//         else reject(new Error('number is not oddd'))
//     }, 1000)
// });
// p
//     .then(res => console.log('res', res))
//     .catch((err) => console.log('err', err.message))




function getUser(id) {
    return new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * 1000);
        if (random % 10 != 0) {
            resolve({ data: random, message: 'successfuly', id: id })
        } else {
            reject(new Error('oops!'))
        }

    })
}
function getRepo(id) {
    return new Promise((resolve, reject) => {
       
            resolve(['repo1', 'repo2', 'repo3'])
       
    })

}
function data() {
    console.log("***************************");

    getUser(1)
        .then((res) => {
            console.log('user', res)
            getRepo(res)
                .then((res) => { console.log('repo', res)
                return res;
            })
                .catch((err) => console.log('err  repo', err.message))
    
        }
    
        )
        .catch((err)=>console.log('error',err) )
        
}
data();


