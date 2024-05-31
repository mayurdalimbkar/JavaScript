function userLoggedIn(userName){                //userName is a parameter
    return `${userName}, is successfully Logged IN`
}

console.log((userLoggedIn("Mayur")));           // Mayur is a Argument.
 


function carBrand(carName){
    return`${carName}, is of Tata.`
}

console.log(carBrand("Nexon"));


function addTwoNumbers (num1,num2) {         //num1 and num2 are function parameters
    console.log(num1 + num2);
}

  addTwoNumbers(4,5)                  // 4 and 5 are arguments.



function addTwoNumbers (num1,num2) {         //num1 and num2 are function parameters
    let Result = num1 + num2
    return Result
}

const Result= addTwoNumbers(55,78)
console.log("Addition of given number is : " ,Result);

function loginuserMessage(username){
    return `${username} just logged in.`
}
console.log(loginuserMessage("Mayur"))

// function studentResult(studentName){
// if(studentName === undefined){
// console.log("Please Enter Student Name to fetch the Result.");
// return
// }}
// return `Congratulations, ${studentName} you have passed this exam !`
// console.log((studentResult("Mayur")))


function findMyLocation(placeName){
 if(placeName === undefined){
    console.log("You have entered a destination which is too much far from Pune.");
     return
 }
  return `${placeName}, is just 40KMs from Pune!`
}

console.log((findMyLocation()));



function assetData(assetProvider){
    return `${assetProvider}, have to submitted this asset.`
}

console.log(assetData("Dell Technologies"));





// returning objects inside function.

const officeData = {
    empName : "Mayur",
    empID : 2288754,
    email:"mayur.dalimbkar@tcs.com"
}

function handleObject(anyobject){
    console.log(`Employee name is ${anyobject.empName}, and Emplyee ID is ${anyobject.empID}`)
}

console.log(handleObject(officeData));