/* REDUCE*/
// Reduce the array to a single value

// array.reduce(reducer function  with 2 variable for (accumulator, element ));
// element el, accu
// [1 ,2,3]   1 acc, el -> return,     2. acc, el -> return  3. acc, el(3) -> return {reduced }

// arrow function two variables we have to take


// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res, el) => res + el);
// console.log(finalVal);


// [1,2,3,4]
// let finalValue = nums.reduce((res, el)=> res+el);
// (0,1) => 1
// (1,2) => 3
// (3,3) =>  6
// (6,4) => 10  // finalValue

// 

let nums = [1,2,3,4];
let finalVal = nums.reduce((res, el) => {
    console.log(res);
   return res + el;    // logic for sum of all array   
} );
console.log(finalVal);
