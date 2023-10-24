function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}
//sayMyName();        //sayMyName is reference  () is used for execution

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,4); //checking of inputs needs to be done, and will be done later


function loginUserMessage(unsername){
    if(unsername === undefined){        // if(!username) is same as--> if(unsername === undefined)
        console.log("Please enter a username");
        return;
    }
    return `${unsername} just logged in.`
}
console.log(loginUserMessage("Nishant"));


function loginUserMessage(unsername = "sam"){   //sam will be default value if NO value is passed
    return `${unsername} just logged in.`
}
console.log(loginUserMessage());