let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

if(true){
    let d = 100
    const e = 200
    var f = 300
}
//console.log(d);
//console.log(e);
console.log(f);

function one(){
    const one1 = "One Excecuted"

    function two(){
        const two2 = "TWO Executed";
        console.log(`Executing ${one1} from Two`);
    }
   // console.log(two2);

    two();
}

one();
