const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");



for(code of countryList){
    console.log(code);
}

// for(let select of dropdowns){
//     for(currCode in countryList){
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         select.append(newOption);
//     }
// }