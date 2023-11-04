

const myArray = [0,2,3,4,5,784,0];


const myArr2 = new Array(1,2,3,8,11,5)
console.log(myArr2);

//Array Methods

myArr2.push(6);
myArr2.push(1);         //Adds element in the end of array
console.log(myArr2);

myArr2.pop();           //Deletes Last element of array
console.log(myArr2);
                        console.log('********shift/unshift');
myArr2.unshift(252);    //Adds element in the start of the Array** But not 
                        //recommended generally cause every value
                        // will have to be shifted by 1 place
console.log(myArr2);
myArr2.shift();         //Deletes first element of array
console.log(myArr2);

                        console.log('*******includes /indexof*******');

console.log(myArr2.includes(100));
console.log(myArr2.includes(8));

console.log(myArr2.indexOf(100));
console.log(myArr2.indexOf(8));

                        console.log("*******JOIN");
//Used to convert array to string
console.log(myArr2);
console.log(typeof myArr2);

const newArray = myArr2.join();
console.log(newArray);
console.log(typeof newArray);

/*****SLICE/Splice */
console.log(myArr2);
console.log(myArr2.slice(3,5));
console.log(myArr2);
console.log(myArr2.splice(3,5));
console.log(myArr2);