const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Spiderman","Flash","Batman"]

marvel_heros.push(dc_heros); // It puts (dc_heros array) as third element of marvel_heros
console.log(marvel_heros);  

//Accesing Elemnts of pushed array
console.log(marvel_heros[3][2]);


console.log("*****CONCAT*****");
const months = ["Jan","Feb","march","May","June"]
const weeks =["Monday","Tuesday","Wednesday","Thursday"]
/****  Combines two or more arrays and return a new array */
const arr = months.concat(weeks);
console.log(arr); 

                /*   Spread Operator  */
const arrn = [...weeks,...months]
console.log(arrn);  //* More Widely Used Easy to Impliment


console.log("*****Flatening the Arrays***********");
const gandaArray =[1,2,3,[4,5,6],7,[8,9,10,[11,12,13]]]
const acchaArray = gandaArray.flat(Infinity);
console.log(gandaArray);
console.log(acchaArray);


console.log("*****Array is/from/of****");
console.log(Array.isArray([1])); //To check is value given are in array or not
console.log(Array.from("Nishant")); // Break it into array 
let score= 1000
let score1=2000
let score2=3000
console.log(Array.of(score,score1,score2));
