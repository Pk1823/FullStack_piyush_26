/* REST*/

// aLLO9W A FUNCTION TO TAKE AN INDEFINITE NUMBER OF ARGUMENTS AND BUNDLE THEM IN AN ARRAY


// function sum(...args) {
r//eturn args.reduce((add, el) => add + el);    }



//  function sum(...args) {  // arguments
//  for(let i = 0; i < args.length; i++) 
//  {
//     console.log("you gave us: ", args[i]);
//  }
// }

// function min(a,b,c,d) {
//     console.log(arguments); // element ka collection 

// }
// inbuild ARRAY
// arg is not array  like when push then its call no  push pop ?

 // for sum of arg

//  function sum() {
//     return arguments.reduce((sum,el) => sum + el);
//     // arguments.push(1);
//     // array method are not work used 
//  }



//fot this use rest this collect all all arg in array

function sum(...args) {
    return args.reduce((sum, el) => sum + el);
}



function min(...args) {
    return args.reduce((min,el) => {
        if (min > el) {
            return el;

        } else {
            return min;
        }

    });
}

 