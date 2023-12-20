const mainDiv = document.querySelector(".container");
const btn = document.querySelector(".btn");


let count = 0;
btn.addEventListener("click",() =>{
    if(count%2 ==0){mainDiv.style.backgroundColor = "lightgreen";}
    else{mainDiv.style.backgroundColor= "red"}
    console.log(count);
    count++;
})