// Async Await
/* 
    Introduced in ES8. Async allows us to avoid chaining promises (.then())
    Allows us to write async code in a synchronous manner.
    Same as regular functions except one thing:
            ! Async fx always returns a promise
*/

async function myFx() {
    // Fx declaration
    return `Hello World`
}
//exprFx().then(console.log)

console.log(myFx()); // Async function always returns a promise

// To resolve our promise, we utilize. .then()
myFx().then(console.log)

// Alternate representation returning a promise without async.
function promiseFx() {
    return Promise.resolve("hello World")
}

promiseFx().then(console.log)

const exprFx = async () => {
    // Fx expression (arrow)
}

// Await 
/* 
        Await is used only inside of an async function.
        It waits for the promise to resolve or reject. 

*/

let spaceXURL = `https://api.spacexdata.com/v3/history`

/*fetch(spaceXURL)
.then(function(res){
    return res.json();
}) .then(function(data){
    console.log(data);
    return data;
})*/

async function fetchData () {
    const res = await fetch(spaceXURL);
    //console.log(res);
    const data = await res.json();
    console.log(data)

}

fetchData();