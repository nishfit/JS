let button = document.querySelectorAll('.buttons');
Array.from(button).forEach( (buttons) => {
    buttons.addEventListener('click', (e)=> {
         console.log(e.target);
        //  console.log(e);
        
            button.querySelector("#2").classList.add("transp");
            console.log(classList);
    } )
} ) 