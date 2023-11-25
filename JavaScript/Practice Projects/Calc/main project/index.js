// document.getElementById('one').addEventListener('click',function(e){
//    console.log(e);
// })
// //type,timestamp,defaultPrevented
// //target,toElement,srcElement,currentTarget
// //clientX,clientY,screnX,screenY
// //altKey,ctrlKey,shiftKey,keyCode

let string ='';
let buttons =document.querySelectorAll('.button');
Array.from(buttons).forEach( (button) => {
   button.addEventListener('click', (e) => {
      if(e.target.innerHTML== '='){
         string = eval(string);
         document.querySelector('input').value = string;
      }
      if(e.target.innerHTML== 'c'){
         string = '';
         document.querySelector('input').value = string;
      }
      else{
         
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string
      }
   })
} )