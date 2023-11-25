const buttons = document.querySelector('.button');
const body = document.querySelector('body');
// console.log('Hello');

buttons.forEach(function (button){
    console.log('button');
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);
    })
});