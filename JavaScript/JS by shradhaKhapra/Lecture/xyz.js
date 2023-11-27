let el = document.createElement("h1")
el.innerHTML = "<i>Hello,This is heading by JS</i>";
document.querySelector("body").prepend(el);



let div1 = document.createElement("div")
div1.innerHTML = " Hello this is div element";
document.querySelector("body").append(div1);



let buttons = document.createElement("button")
buttons.innerHTML = "Click me!"
buttons.style.backgroundColor = "red";
buttons.style.color = "white";
document.querySelector("body").append(buttons);


// let heading = document.querySelector("h1")
// heading.remove();   //this will remove h1 headings

