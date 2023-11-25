const codingLang = ["Js", "ruby", "java","python","c++"]

const values = codingLang.forEach( (item) => {
    console.log(item);
} )

console.log(values); // returns nothing


const myNums = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

//If scope is opened  return has to be used
const newNumbs = myNums.filter( (num) =>{ 
   return num > 7
})
console.log(newNumbs);

//Doing same thing in forEach
const newNum = []
myNums.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
} )
console.log(newNum);