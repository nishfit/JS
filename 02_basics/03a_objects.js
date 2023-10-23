const jsUser = {
    name: "Nishant",
    //[mySym]: "mykey1",
    location: "Agra",
    isEmail: "lala@gmail.com",
    iD: 13220,
    isLoggedIn: false,
    lastLoginDay: ["Monday","Tuesday"]
}
jsUser.greeting = function () {
    console.log("Hello JS USER");
}
console.log(jsUser.greeting());
jsUser.greetingTwo = function () {
    console.log(`Hello JS USER,${this.isLoggedIn}`);
}
console.log(jsUser.greetingTwo());