//Immediately Invoked Function Expressions(IIFE)
// ()() fisrt one it to wrap function and second one is for executtion

(function chai(){ //Named iffe
    console.log(`DB CONNECTED`);
})();  //semicolon is required here because it closes the function context

//IIFE is used to execute the fn immidiately and 
// it also stops the pollution of global scope

((name) =>{  //unnamed iffe
    console.log(`DB TWO CONNECTED ${name}`);
})(`Nishant`);