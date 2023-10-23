//Destructuring of objects

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructorname: "Hitesh Chaudhary"
}

console.log(course.courseInstructorname);
console.log(course.coursename);
//We have to write course.courseInstructor every time
// So to short it we use as following 

const {courseInstructorname: ins} = course
//    property to be used:short name = obj

console.log(ins);

//Destructuring can also be done for arrays


//API in json format in the form of obj/array
// {
//     "name":"Nishant Singh"
//     "Ec no.":"31904"
//     "Branch":"fatehpur tal narja"
// }

// or it can be in the form of array

[
    {},
    {},
    {}
]