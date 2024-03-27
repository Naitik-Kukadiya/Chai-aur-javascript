let myObject = {
    firstName: "Naitik",
    lastName: "Kukadiya",
    Age: 20,
    email: "kukadiya@myObject.com"
    
}

myObject.email = "google.com"
// console.log(myObject);
Object.freeze(myObject);
myObject.email = "amazone.com"
// console.log(myObject);

myObject.naitik = function() {
    console.log("Hello World");
}
console.log(myObject.naitik);