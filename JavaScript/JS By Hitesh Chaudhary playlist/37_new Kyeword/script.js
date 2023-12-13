//proto type
var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.getCourseCount}`);
    };
};

var nishant = new User ("Nishnat", 101);
console.log(nishant);

var suraj = new User("suraj",55);
console.log(suraj);
console.log("Program Ends");