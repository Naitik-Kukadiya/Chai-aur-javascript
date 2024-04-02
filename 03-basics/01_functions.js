function addNumbers (number1, number2){
    console.log(number1 + number2);
}
//let new1 = addNumbers("naitik ", "kukadiya");
// console.log(new1);

function addNumbers (number1, number2){
   const addNew = number1 + number2;
   return addNew;
}
// addNumbers()
let addNew = addNumbers(5,10);
// console.log(addNew);

function loginMsg(username = "sam"){
    if(username === undefined){
        console.log("Enter the user Name");
        return
    }
    return `${username} just logged in`
} 
console.log(loginMsg("Naitik"));
