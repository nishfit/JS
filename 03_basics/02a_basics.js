//excecuting/calling before initialization

addone(10);

function addone(num){
    return num+1
}


//addTwo(5); this cant be called before the actual function

const addTwo = function(num){
    return num + 2;
}