// Imediate Invoked function expression.    (IIFE)

function userStatus(){
    
    console.log(`Mayur is succesfully Logged IN`);       // Nomral function execution.
}
userStatus();

// (function userStatus(){
    
//     console.log(`Mayur is succesfully Logged IN`);      //iife execution, just wrap the function inside curly braces and call the function with just curly braces.

// })()


( (gameName) => {
    console.log(`${gameName}, is very Interesting to Play`);
})("BGMI")