//callback
getData = (callback) => {
    setTimeout(() => {
        callback(undefined, 'dsada')
    }, 2000);
}

getData((error,result) => {
    console.log(result)
})

const getDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('asfsafas')
        reject('error')
    }, 2000);
})

getDataPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})