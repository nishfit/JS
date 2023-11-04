// Primitive

//7 types: String, Number,Boolean, null, Undefined, Symbol

const id = Symbol('123');
const idTwo = Symbol('123');
console.log(id==idTwo); 
console.log(id);
console.log(idTwo);



//Non-Primitive

// Array, Objects, Functions
//Array
const heros = ["Shaktiman","Batman","Me"];
//Object
let myObj = {
    name:"NIshant",
    age:22,
    standard:12
}
console.log(typeof myObj);

const myFunction = function(){
    console.log("function output ");
}
console.log(typeof myFunction);
