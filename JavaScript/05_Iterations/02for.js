const myObject = {
    js: "javaScript",
    cpp:"C++",
    rb:"ruby",
    swift:"SWIFT by Apple"
}

//forof does not work for Object so we will use ForIn loop
for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}