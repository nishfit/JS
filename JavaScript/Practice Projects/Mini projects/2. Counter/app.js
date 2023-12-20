const counter = document.querySelector("h1");
const dec = document.querySelector("#dec");
const res = document.querySelector("#res");
const inc = document.querySelector("#inc");
 

dec.addEventListener ("click", () => {
    counter.innerText = counter.innerText - 1;
} );

res.addEventListener ("click", () => {
    counter.innerText = 0;
} );

inc.addEventListener ("click", () => {
    const inst = parseInt(counter.innerText);
    // console.log(typeof(inst));
    counter.innerText = (1 + (inst));
} );