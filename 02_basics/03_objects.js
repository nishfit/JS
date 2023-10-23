            //singleton


            //object literals

            const mySym = Symbol("key1");

            const jsUser = {
                name: "Nishant",
                [mySym]: "mykey1",
                location: "Agra",
                isEmail: "lala@gmail.com",
                iD: 13220,
                isLoggedIn: false,
                lastLoginDay: ["Monday","Tuesday"]
            }
console.log(jsUser.isEmail)
console.log(jsUser["isEmail"]);    //Should be used when there is (FuLL NAME/symbol) instead  of Name.


/****************Symbol */
console.log(typeof jsUser[mySym]);
console.log(jsUser [mySym]);
