let myObject = new Object();
myObject.neme = "Naitik"
myObject.age = 20
// console.log(myObject);   

let newObject = {
    email : "Google@gmail.com",
    fullName : {
        userFullName:{
            firstName: "Naitik",
            lastName: "Kukadiya"
        }
    }
}
console.log(newObject.fullName.userFullName);

let chepter1 = {a: 1}
let chepter2 = {b: 2}
let chepter3 = {c: 3}

let mainChepter = Object.assign({},chepter1,chepter2,chepter3);
// console.log(mainChepter);
// console.log(chepter2);
let Object4 = {...chepter1,...chepter2,...chepter3}
// console.log(Object4);
// console.log(chepter1);
// console.log(chepter2);
// console.log(chepter3);

// console.log(Object.keys(mainChepter));
// console.log(Object.values(mainChepter));


const corce = {
    name : "fullstack",
    fees : 110000,

}
const {name: naitik} = corce;
console.log(naitik);
