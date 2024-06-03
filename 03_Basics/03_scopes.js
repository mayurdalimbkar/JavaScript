var c = 300
let a= 100             // global scope

if(true){
    let a = 10
    const b = 20        // block scope
    var c = 30 
}

console.log(a);
// console.log(b);
console.log(c);


// nested scopes

function one(){
    const userName = "Mayur"

    function two(){
        const website ="github.com/dev-mayur"
        console.log(userName);
    }
    
    // console.log(website);  // website cannot returned outside of the scope.

    two()
}

one()




if(true){
    const username = "Mayur"

    if(username === "Mayur"){
        const websiteName = "github-dev-mayur"
        console.log(username + websiteName);  
    }
    console.log(websiteName);  // you connont access websiteName outside the block
}
console.log(username);    // study the block of username, printed username outside of username bloc.