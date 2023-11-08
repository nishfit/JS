//chaining
//result of first passed to second


const myNumbers = [1 ,2 ,3 ,4 , 5, 6, 7, 8, 9, 10]
const NewNumber = myNumbers.map( (num) => num*10 ).map( (num) => num+1 ) 
console.log(NewNumber);


const NewNumber2 = myNumbers.map( (num) => num*10 ).map( (num) => num+1 ).filter( (num) => num > 40 ) 
console.log(NewNumber2);