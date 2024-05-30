studentInfo = {
    name :                      // ojects inside objects
    {
        firstName:"Mayur",
        lastName : "Dalimbkar",
        },    
    age : 23,
    email : "mayurdalimbkar26@gmail.com",
    address : "Babhulsar Khurd",
    rollno : 32,
    contact : 8975863075
}

 console.log(studentInfo.name.firstName);  // accessing objects inside oject using . operator

// Creating function with objects.


studentInfo.greeting = function(){
    console.log(`Welcome to the School ${this.name}, you are assigned with roll no ${this.rollno} `);
}

console.log(studentInfo.greeting());

console.log(Object.keys(studentInfo))               // fetching keys from object
console.log(Object.values(studentInfo));            // fetching values from object


const {email : mail} = studentInfo // object destructuring
console.log(mail);

const {age : vay} = studentInfo
console.log(vay);



