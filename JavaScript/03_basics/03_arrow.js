const user = {
    username: "Nishant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}
// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

//console.log(this);

// function chai(){
//     let username = "nishnat"
//     console.log(this.username);
// }
// chai()

// const chai = function chai(){
//     let username = "nishnat"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "nishnat"
    console.log(this.username);
}
chai()

/*++++++ARROW+++++ */
// BASIC ARROW FUNCTION
//explicite return
const addTwo = (num1, num2) =>{  //Curly braces me return likhna padega
    return num1+num2
}
console.log(addTwo(3,4));
//implicite return
const addTwoa = (num1,num2) =>(num1+num2) // paranthesis me return use nahi hoga****will be used in REACT

console.log(addTwoa(3,9));



const addtwos = (num1,num2) => ({uername:"Nishant"}) //returning obt but paranthesis is required to rurn it