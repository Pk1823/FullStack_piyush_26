// HIGHER ORDER FUNCTIONS 
// takes one or multiple functions as arguments
 

// function multipleGreet(func, count) {
//     for(let i= 1; i<=count; i++) {
//         func();
        
//     }
// }
// let greet = function() {
//     console.log("ankur");    
// }
// //multipleGreet(greet,10 );
// multipleGreet(function() { console.log("namaste")}, 1000);

// Return a function
 



// let odd = function(n) {
//     console.log(!(n%2 == 0)); }

// let even = function(n) {
//     console.log((n%2 == 0));
// }
function oddOrEvenFactory(request) {
    if(request == "odd") {
        let odd = function(n) {
    console.log(!(n%2 == 0)); }
    return odd;


        } else if(request == "even") {

let even = function(n) {
    console.log((n%2 == 0));   
}  


    return even;
    }  else {
        console.log("wrong rquest ");
    } 
}