const images = document.querySelectorAll("#n124");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const names = document.querySelector("#name");

const details = document.querySelector("#details");

var counter = 0;


console.log(images);
images.forEach( (images,index) => {
    images.style.left = `${index * 100}%`
});

const slideImage = () => {
    images.forEach( (img) =>{
        img.style.transform = `translateX(-${counter * 100}%)`
    }
)};


const post = document.querySelector(".post");
post.innerHTML= "Hello";

console.log(Object.values(empData[0]));

// const InsertData = () =>{
//     names.innerText= "Hello";
// }
// InsertData();
next.addEventListener("click", () =>{
    slideImage();
    counter++;
    console.log(counter);
});

prev.addEventListener("click", () =>{
    slideImage();
    counter--;
    console.log(counter);
    
});


