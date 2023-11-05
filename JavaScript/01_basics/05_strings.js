const name = "Nishant ";
const repoCount =50;
// console.log(name + repoCount + " Singh");
//OUTDATED

//****Use***//
//``````back ticks`````//
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


/*Initializing a String */
const gameName = new String(`Counter Strike`);

console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));

const subString = gameName.substring(0,4);
console.log(subString+"++SUBstring");

const sliceString = gameName.slice(-4,0);
console.log(sliceString+': Slice string(-4,0)');

const newString = '   Hello    guys i am here   ';
console.log(newString);
console.log(newString.trim());