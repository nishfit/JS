let myDate= new Date();
console.log(myDate);
console.log(`toString: `+myDate.toString());
console.log(`ISO String: `+myDate.toISOString());
console.log(`toJson: `+myDate.toJSON());
console.log(`toLocaleString: `+myDate.toLocaleString());
console.log(`toLocalDateString: `+myDate.toLocaleDateString());
console.log(`toLocaleTimeString: `+myDate.toLocaleTimeString());

console.log(`**************`);

let myCreatedDate = new Date(2023,11,4) // jan is 0 indexed so it will o/p 12th month
console.log(myCreatedDate.toLocaleString());
console.log('*********IMP*****');
let myNewCreatedDate = new Date("01-14-2023");
console.log(myNewCreatedDate.toLocaleString());

console.log('***Time Stamp*****' );
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myNewCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getUTCDate());

 console.log('**********IMPORTANT 2******');   
           console.log( newDate.toLocaleString('default',{
                weekday: "long",
                timeZoneName:"short"
            }));