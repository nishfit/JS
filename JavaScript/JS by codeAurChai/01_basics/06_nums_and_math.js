const score = 400;
console.log(score);  // 400

const balance = new Number(100);
console.log(balance); // [Number:400]

console.log(balance.toString()); //  100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00
console.log(`******Fisrt******`);
const newBalance = new Number(105.126); 
console.log(newBalance.toFixed(2));  //105.13
console.log(newBalance.toPrecision(2));  // trims or consider values from left
                                        // output : 1.1e+2 Kind of error
console.log(newBalance.toPrecision(3)); // 105
console.log(newBalance.toPrecision(4)); //  105.1
console.log(`*****Second********`);


//covert to indian currency system
const hundreds = 1000000
console.log(hundreds.toLocaleString(`en-IN`));

/* *************** MATHS*********/
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(10.5));
console.log(Math.min(10,4,8,9,22));


console.log(`******Third********`);
const Mathrandomevalue=(Math.random()); // return value from [0.00 to 1.00]
console.log(Mathrandomevalue);  
const gumgum = Mathrandomevalue*100;  
console.log(gumgum);
console.log(gumgum.toFixed(0));
