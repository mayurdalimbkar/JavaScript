//Array 

const myArr= [0,1,2,3,4,5,6,7,8]
console.log(myArr[5]);

//Array_Methods

myArr.push(9) //to add element is array
console.log(myArr);

myArr.pop() // to remove last element in array
console.log(myArr);

myArr.unshift(10) //to add element at the start
console.log(myArr);

myArr.shift() // to remove first element.
console.log(myArr);



const newArray = myArr.join() // Converting Array into String 
console.log(newArray);
console.log(typeof newArray);

const newarr= myArr.splice(1,4)
console.log(newarr);


const team1 = ["Rohit","Virat","Bumrah"]
const team2 = ["Ishan","Suryakumar","Siraj"]

//console.log(team1.push(team2)); // push method creates array inside array 

//const finalTeam = team1.concat(team2); // contactinate two Arrays
const finalTeam = [...team1,...team2]
console.log(finalTeam);



