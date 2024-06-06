const userEmail ="mayur.d@google.com"

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email.");
}


//falsy values 

// false, 0,-0, BigInt 0n, Nan,"",Null, Undefined

//truthy values

// "true", "false", "0", [], {}, function(){}


const emptyObject = {}

if(Object.keys(emptyObject.length===0)){
    console.log("object is empty");
}


// Nullish Coalescing Operator (??) : null undefined // it checks whether there is any null or undefined value and it skip that null and undefined value

let val1;

val1 = null ?? 10
val2 = undefined ?? 20

console.log(val1);
console.log(val2);