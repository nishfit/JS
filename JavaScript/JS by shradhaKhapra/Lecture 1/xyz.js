let el = document.createElement("h1")
el.innerHTML = "<i>Hello,This is heading by JS</i>";
document.querySelector("body").append(el);



let div1 = document.createElement("div")
div1.innerHTML = " Hello this is div element";
document.querySelector("body").append(div1);


//creating elemnent
let buttons = document.createElement("button")
//Giving property
buttons.innerHTML = "Click me!"
buttons.style.backgroundColor = "red";
buttons.style.color = "white";
//Applying at location
document.querySelector("body").append(buttons);


// let heading = document.querySelector("h1")
// el.remove();   //this will remove h1 headings

