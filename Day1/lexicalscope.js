/* LEXICAL SCOPE*/  // nested function
// a variable defined a function can be accessible inside another function defined after the variable declaration.the opposite is NOT true.

function  outerFunc() {

      let x = 5;
    let y = 6; 

    function innerFunc() { // function Scope hai ye sirf inner me use hoga
        
        console.log(x);    
        console.log(y);

}
innerFunc();
}

outerFunc();

