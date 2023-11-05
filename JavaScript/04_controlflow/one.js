//      "=="        to check values
//      "==="  (Strict equal)      it also checks the data type

const balance = 1000
if(balance > 500) console.log("Balance is above 500");  //Using if in short hand notation

const userloggedIn = true
const debitCard = true
if(userloggedIn && debitCard){
    console.log("Allowed to buy course");
}
// || or condtion checking using || symbol