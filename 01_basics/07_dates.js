let myDate= new Date();
console.log(myDate);
console.log(`toString: `+myDate.toString());
console.log(`ISO String: `+myDate.toISOString());
console.log(`toJson: `+myDate.toJSON());
console.log(`toLocaleString: `+myDate.toLocaleString());
console.log(`toLocalDateString: `+myDate.toLocaleDateString());
console.log(`toLocaleTimeString: `+myDate.toLocaleTimeString());

console.log(`**************`);

let myCreatedDate = new Date(2023,1   ,4)
console.log(myCreatedDate.toLocaleString());
/*********IMP***** */
let myNewCreatedDate = new Date("01-14-2023");
console.log(myNewCreatedDate.toLocaleString());

/***Time Stamp***** */
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myNewCreatedDate.getTime());