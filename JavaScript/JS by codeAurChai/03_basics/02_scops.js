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
//console.log(d);       error dega because printing out of scope
//console.log(e);       error dega because printing out of scope
console.log(f);         /*isko scope samajh nahi aata aur kahin 
bhi koi update kia toh poore code me change ho jayega so better to be avoided*/

function one(){
    const one1 = "One Excecuted"

    function two(){
        const two2 = "TWO Executed";        //console.log hua nahi toh print kahan se hoga
        console.log(`**Executing ${one1} from Two**`);
    }
   // console.log(two2);

    two();
}

one();
