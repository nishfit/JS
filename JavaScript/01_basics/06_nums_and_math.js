const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance); 

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(`************************`);
const newBalance = new Number(105.126);
console.log(newBalance.toFixed(2));
console.log(newBalance.toPrecision(2));
console.log(newBalance.toPrecision(3));
console.log(newBalance.toPrecision(4));
console.log(`******************`);


//covert to indian currency system
const hundreds = 1000000
console.log(hundreds.toLocaleString(`en-IN`));

/* *************** MATHS*********/
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(10.5));
console.log(Math.min(10,4,8,9,22));
console.log(`******`);
console.log(Math.random());
const gumgum=Math.random()*100;
console.log(gumgum.toFixed(0));