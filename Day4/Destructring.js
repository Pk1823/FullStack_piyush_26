// Storing values of array into multiple variables

// //  let names = ["tony", "bruce","peter","steve"];
// let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];

// let winner = names[0];
// let runnerup = names[1];
// let  secondRunnerup = names[2];

// let [winner, runnerup, ...others] = names;  

// let [winner, runnerup, secondRunnerup] = names;




// Object ///


const student = {
    name: "piyush", 
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password:"abcd", 
    city : "pune",
};
    
let { username: user , password: secret, city : place = "mumbai" } = student; 