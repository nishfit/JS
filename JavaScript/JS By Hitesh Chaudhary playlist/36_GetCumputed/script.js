const grey = document.querySelector(".grey");
const white = document.querySelector(".white");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const center = document.querySelector("body")


const BGColor = (theElement) => {
    return window.getComputedStyle(theElement).backgroundColor;
};




const magicColorChanger = (elem,colour) => {
    return elem.addEventListener("mouseenter", () =>{
        center.style.background = colour;
        console.log("hello");
    });
};

magicColorChanger(grey,BGColor(grey));
magicColorChanger(white,BGColor(white));
magicColorChanger(blue,BGColor(blue));
magicColorChanger(yellow,BGColor(yellow));