const codingLang = ["Js", "ruby", "java","python","c++"]

//CALL BACK FUNCTION
/* Func dont have name
    iterates all items of array by itself 
*/
codingLang.forEach( function (val) {
    console.log(val);
})

console.log("********Arrow*******");
//Call Back using arrow 
codingLang.forEach( (value) => {
    console.log(value);
} )

console.log("*****print Me******");
function printMe(item){
    console.log(item);
}
codingLang.forEach( printMe ) //just have to give reference, Dont have to execute 

console.log("******Call Back fn properties*****");
codingLang.forEach((item, index,arr) => {
    console.log(item,index,arr);
} )

//accesing objects Using ForEach loop
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
} )