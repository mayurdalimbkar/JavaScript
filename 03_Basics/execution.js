function one(){
    console.log("one");
    two()                                       // Learned about stack
                                                //two()
                                                //one()
}

function two(){
    console.log("two");                         // Learned about stack
                                                //three()
                                                //two()
    three()
}

function three(){
    console.log("three");
}

one()
two()
three()