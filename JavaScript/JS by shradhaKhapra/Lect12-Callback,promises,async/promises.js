const getPromise = () =>{
    return new Promise( (resolve, reject) =>{
    console.log("hello promise here");
    //console.log(promise);
    resolve("1233");
} );
};

let promise = getPromise();

console.log(promise);
promise.then( (res) => {
    console.log("Promise FulllFilled", res);
} );

promise.catch((err) =>{
    console.log("Rejected", err);
});
