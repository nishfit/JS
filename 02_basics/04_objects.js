//singleton   or constructor

//const tinderUser = new Object()      --> non-singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rakesh"
tinderUser.isLoggedIn = true

console.log("this" +tinderUser);
const regularUser = {
    email: "lal@gmail.com",
    fullname: {
        userfullname: {
            fisrtname:"Nishant",
            lastname:"Singh"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.fisrtname);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {3:"x",4:"b",5:"c"}

// cont obt3 = {obj1,obj2}  //It will create two objects in obt3


const objx = Object.assign({},obj1,obj2); //it will not be used much also
// It works like it puts all obj in first one, 
//so better to give one empty obj as target obj
//console.log(obj3)

/*IT WILL BE USED MOST*/
    /*Spread*/
const obj3 = {...obj1,...obj2}

console.log(obj3);
console.log("**********************");

console.log(tinderUser);

console.log(Object.keys(tinderUser));       //Return keys in Array format
console.log(Object.values(tinderUser));     //Return values in Array format
console.log(Object.entries(tinderUser));    //Return array of array

//to check if this named property is Present or Not
console.log(tinderUser.hasOwnProperty('name'));     //Will retun true or false accordingly
