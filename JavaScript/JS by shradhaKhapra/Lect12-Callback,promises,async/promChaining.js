function asyncFunc(){
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Sucessfully Fetched Data 1");
        resolve("Sucess")
    },4000);
});
}
function asyncFunc2(){
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Sucessfully Fetched Data 2");
        resolve("Sucess")
    },4000);
});
}


console.log("Fetching data 1");
let p1 = asyncFunc();
p1.then( (res) =>{
    console.log("Sucess", res);
    let p2 = asyncFunc2();
    p2.then((res) =>{
        console.log("Sucess 2",res);
    })
});