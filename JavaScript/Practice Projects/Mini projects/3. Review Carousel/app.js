const images = document.querySelectorAll("#n124");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
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

const InsertData = () =>{
    
}

next.addEventListener("click", () =>{
    slideImage();
    counter++;
});

prev.addEventListener("click", () =>{
    slideImage();
    counter--;
});


