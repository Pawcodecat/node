const myPromise = Promise.resolve(42)
const myPromise2 = myPromise
const myPromise3 = new Promise(resolve => {
    setTimeout(() => {
    resolve(100)
    }, 3000)
})
.then( x => {
    return new Promise(resolve => {
        setTimeout(() => { 
            resolve(x + 50)
        }, 3000)
    })
});


myPromise
.then( x => {
    console.log('myPromise',x)
});

myPromise2
.then( x => {
    console.log('myPromise2',x)
});

myPromise3
.then( x => {
    console.log('myPromise3',x)
});

