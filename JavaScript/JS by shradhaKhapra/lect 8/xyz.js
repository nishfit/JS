let btn11 = document.querySelector("#btn1");
btn11.onclick = (evt) => {
    console.log("btn1 JS cliked");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};


btn11.ondblclick = () => {
    console.log("btn1 dbl cliked");
};

let btn22 = document.querySelector("#btn2");
btn22.ondblclick = () => {
    console.log("btn2 dbl cliked");
};

let btnC = document.querySelector("#btn3");
btnC.onclick = () => {
    // let divC = document.createElement("h1")
    // divC.innerHTML =  "hello div here";
    // document.querySelector("#div3").prepend(btnC);
    let el = document.createElement("div")
    el.innerHTML = "<h3> Hello,This is Div by JS on click <h3>";
    document.querySelector("#div3").after(el);
}

let btn4click = document.querySelector("#div4");
btn4click.addEventListener("click", (evt) => {
    console.log("Button Clicked");
})
btn4click.addEventListener("dblclick", (evt) => {
    console.log("Button Double Clicked");
})


let modeBtn = document.querySelector("#btn5")
let currentMode = "light"
modeBtn.addEventListener("click",() =>{
    if(currentMode == "light"){
        currentMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }else{
        currentMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currentMode);
})