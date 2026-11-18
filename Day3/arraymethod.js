/*forEach*/

// arr.forEach(some function definition or name);


// let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//     console.log(el);

// });




// arr.forEach(function (el) {
//     console.log(el);
// });




// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);






let arr = [ {
     name : "piyush",
     marks: "56", 
},
 {
    name: "ayush",
    marks: 92,

 },
  {
    name: "rajat",
    marks: 96,

  },  
];
arr.forEach((student) => {
    console.log(student.marks)
} );