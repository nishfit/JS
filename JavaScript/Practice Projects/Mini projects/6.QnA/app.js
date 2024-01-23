const expandBtn1 = document.querySelector("#exBtn1");
const expandBtn2 = document.querySelector("#exBtn2");
const expandBtn3 = document.querySelector("#exBtn3");

const ans1 = document.querySelector('.ans1');
const ans2 = document.querySelector('.ans2');
const ans3 = document.querySelector('.ans3');

expandBtn1.addEventListener("click", () =>{
    // console.log(expandBtn1.classList);
    ans1.classList.toggle('hide')
    // console.log(ans1.classList);
})

expandBtn2.addEventListener("click", () =>{
    
    ans2.classList.toggle('hide');
})

expandBtn3.addEventListener("click", () =>{
    
    ans3.classList.toggle('hide')
})

