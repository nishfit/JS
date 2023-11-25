const userEmail  = "nish@mail.in"

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

/*   falsey values    */
//  false, 0, -0, "", null, undefined, Nan
/*   truthy values   */
// "0", "false", " ", [], {}, function(){}

/*****To check if array is empty***** */
if (userEmail.length === 0) {
    console.log("Array is emplty");
}
/*****To check if Object is empty***** */
const anyObj = {}
if (Object.keys(anyObj).length === 0) {
    console.log("Object is emplty");
}


// Nullish coalescinG operator(??):Null undefined
/*  It returns first valid value it gets to print or return null as mentioned*/
let val1;
val1 = 5 ?? 10 
console.log(val1);

let val2;
val2 = null ?? 1000 
console.log(val2);

let val3;   
val3 = undefined ?? 40 
console.log(val3);

val4 = null?? 11 ?? 120
console.log(val4);


//Terniary Operator

// condtion ? true :false

const iceTeaPrice = 100
 iceTeaPrice <=80 ? console.log("price less than 80") :console.log("More than 80");