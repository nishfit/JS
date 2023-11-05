const myArray = [0,2,3,4,5,784,0];
const myArr2 = new Array(1,2,3,8,11,5)
console.log(myArr2);

//Array Methods
console.log("****Array Methods***");

myArr2.push(6);
myArr2.push(1);         //Push: adds element in the end of array
console.log(myArr2);

myArr2.pop();           //Deletes Last element of array
console.log(myArr2);
                        console.log('********shift/unshift');
myArr2.unshift(252);    //Adds element in the start of the Array** 
                        //But not recommended cause every value
                        // will have to be shifted by 1 place
console.log(myArr2);
myArr2.shift();
myArr2.shift();         //Deletes first element of array
console.log(myArr2);


console.log('*******includes /indexof*******');
console.log(myArr2.includes(100)); // Return true or false
console.log(myArr2.includes(8));    //If value present then true else false

console.log(myArr2.indexOf(100));
console.log(myArr2.indexOf(8));


console.log("*******JOIN*********");
//Used to convert array to string
console.log(myArr2);
console.log(typeof myArr2); // returning "Object" may be cause created as object earlier in the code

const newArray = myArr2.join();
console.log(newArray);
console.log(typeof newArray);   // Returning string

/*****SLICE/Splice */
console.log(myArr2);
console.log(myArr2.slice(3,5));
console.log(myArr2.slice(0,2)); // Returns element in the range fisrt value included last excluded.
console.log(myArr2);
console.log(myArr2.splice(3,5));  //SPLICE: trims out the removes range of values of array both fisrt and last included
                                    //If you return remaining array it will return shortened array 
console.log(myArr2);