/* PQ1 */

// w arrow function that return the sqaure of a number 'n'.
// (n) => {
//     return n*n;
// }

//  (n) => (n*n) 

// const square = n => n * n;
// console.log(square(4));


/* PQ2 */

// wa fun that prints"Hello world" 4 times at intervals of 2 s each

//   // wrong hai


/*
let id = setInterval( ()  => {
    console.log("hello word ");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");

} , 10000); */
 


                 // PART 7


/*pq3 */ 
// QUESTION 1 
// W an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers

/*
const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;

    }
    return total / arr.length;
};

let arr = [1,2, 3, 4, 5, 6];
console.log(arrayAverage(arr));

*/


// QUESTION 2

// W an arrow func named isEven() that takes a single number as argument and returns if it is even or not.


// let num = 5;
// const isEven = (num) => num % 2 === 0;

// console.log(isEven(num)); 




// // QUESTION 3

// const object = { 
// message :'Hello, World!',
// logMessage() {
// console.log(this.message);
// }
// };

// setTimeout (()  => {

// object.logMessage(), 1000; 
// }, );



//     QUESTION 4

let lenght = 4;
function callback() {
    console.log(this.length);

}

const object = {
    length : 5,
    method(callback) {
        callback();
    },
};
object.method (() => {
    console.log(object.length); 
} 
);