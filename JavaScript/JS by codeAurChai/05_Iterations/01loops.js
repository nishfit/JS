const arr = [1, 2, 3, 4]
for(const num of arr){
    console.log(num);
}

const anyGreeting = "Hello world!"
for(const greet of anyGreeting){
    console.log(`letter of Greeting is ${greet}`);
}

//Maps
// Stores unique and same order in which they are inserted

const map = new Map()
map.set(`IN`, "India")
map.set(`US`, "Usa")
map.set('fr','France')

console.log(map);

//print using for of loop
for (const key of map) {
    console.log(key);
}

//Destructuring above to print key or value individually
for (const [key,value] of map) {
    console.log(key);
}


//Objects are not iteratable by forof loop

// const myObject = {
//     'game1':"NFS",
//     'game2':"MiniMilitia"
// }

// for (const [key,value] of myObject) {
//     console.log(key);    
// }