let button = document.querySelectorAll('.buttons');
Array.from(button).forEach( (buttons) => {
    buttons.addEventListener('click', (e)=> {
         console.log(e.target);
         console.log(e);
        if(e.target.id == 2){
            buttons.style.backgroundColor= "blue"
        }
    } )
} )