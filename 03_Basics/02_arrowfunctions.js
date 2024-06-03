// const addTwo= (num1,num2) => {
//     return num1 + num2                   //explicit return need to mention return keyword.
// }

// console.log(addTwo(5,9));

const addTwo = (num1, num2) => (num1+num2)          //implicit return no need to mention return keyword.

console.log(addTwo(4,5));


const printName =(name1,name2) =>(name1 + name2)
console.log(printName("Mayur ","Dalimbkar"));