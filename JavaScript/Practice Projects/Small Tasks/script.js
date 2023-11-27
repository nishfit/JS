let divC = document.createElement("div")
divC.classList.add("divClass")
divC.style.borderColor="black"
divC.style.borderStyle="solid"
divC.style.borderWidth="2px"
divC.style.height="50px"
divC.style.width="300px"
document.querySelector("body").append(divC)

let heading = document.createElement('h2')
heading.innerHTML = "Hello! This is heading "
heading.style.color="red"
document.querySelector("div").append(heading);

