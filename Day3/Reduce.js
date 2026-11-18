/* REDUCE*/
// Reduce the array to a single value

// array.reduce(reducer function  with 2 variable for (accumulator, element ));
// element el, accu
// [1 ,2,3]   1 acc, el -> return, 6

// arrow function two variables we have to take


// let num = [1,2,3,4];
// let finalVal = nums.reduce((res, el) => res + el);
// console.log(finalVal);


// [1,2,3,4]
// let finalValue = nums.reduce((res, el)=> res+el);
// (0,1) => 1
// (1,2) => 3
// (3,3) =>  6
// (6,4) => 10  // finalValue

// 

// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//    return res + el;    // logic for sum of all array   
// } );
// console.log(finalVal);




/* finding Maximum in array  */
// Example

// let piyush = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

// let result = nums.reduce((max, el) => {
//     if(el > max)  {
//         return el;
//     }  else { 
//         return max;

//     }
// }) ; 




// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];

// let max = -1;

// for(let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];

//     }
// }

// console.log(max);

// using short method of reduce


// let max = arr.reduce((max, el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
//     }               
// });  

// console.log(max);


// USING FUNCTION 

function getMin(piyush) {
let min = piyush.reduce((max, el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }               
});   
      return min;
}
  let nums = [10, 20, 30, 5];

   

     

