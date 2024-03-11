let score = 1000;   //number
let check ="ssc";    //string
let check2 =Symbol('123');   //string
let check3 = Symbol('123');   //string
let check4 = Boolean;     //function
let check5 = true;     //boolean
let check6 = undefined; //undedind
let check7 = null;  //object



// console.log(check2 === check3);   //false
//console.log(typeof check7);




//________________________________________________________________________________________________________________


// stack (primitive), heap (non-primitive)

let myName = "naitik";
let ontherName = myName;


ontherName = "netu";

//console.log(myName);
//console.log(ontherName);


let user = {
    name: "naitik",
    mail: "naitik.com"
}

let otherUser = user;
otherUser.mail = "google.com"

console.log(user);
console.log(otherUser);