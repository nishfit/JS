const data = document.querySelector(".main");
const pre = document.querySelector("#previous");
const val = 0;
console.log(Object.values(empData[val]));
//let details = Object.values(empData[val]);
//console.log(empData);
data.innerHTML = details;
let counter = 0;
console.log(counter);
pre.addEventListener("click",() =>{
    empData.forEach(empData => {
        if (empData.ID === counter) {
            console.log("hello here");
          console.log(`${empData.Name} passed with distinction!`);
        } 
      });
})























// const ages = { alice: 18, bob: 27 };

// function hasPerson(name) {
//   return name in ages;
// }

// function getAge(name) {
//   return ages[name];
// }

// console.log(hasPerson("hasOwnProperty")); // true
// console.log(getAge("toString")); // [Function: toString]