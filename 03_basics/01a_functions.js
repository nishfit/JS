function calculateCartPrice(val, ...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300)); 

const user = {
    username: "Nishant",
    price: 199
}
function handleObject2(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user);

handleObject2({
    username: "sam",
    price: 399
})


const myNewArray = [100,200,300,400];

function returnSecondValue(myAraay){
    return myAraay[1];
}
console.log(returnSecondValue(myNewArray));

//putting