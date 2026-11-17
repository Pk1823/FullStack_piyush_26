/* SET TIMOUT */

// setTimout(function, timeout)    // callback, time (ms)  1s = 1000ms

//   console.log("Piyush Kushwaha ");

//   setTimeout( () => {
//     console.log("Apna College");
//   }, 4000);

//   console.log("welcome to ");
//   console.log("welcome to ");
//   console.log("welcome to ");  
//   console.log("welcome to ");

  /* SET INTERVAL */

  // time   execute   loop me executive karege multiple me 

  /* console.log("Piyush Kushwaha ");

  let id = setInterval(() => {
    console.log("Web Developer");
  }, 2000); 

  console.log(id); 

  let id2 = setInterval( () => {
    console.log("hello World");
  }, 3000);
console.log(id2);   */

/* THIS with Arrow  Functions */


// functions 1 scope -> this calling object 
//Arrow 1 lexical scope  ->  parent -> call scope 


const student = {  // normal fun -> object.func , studen.getName , this = student 
name: "aman",
marks: 95,
prop: this, // global scope 
getName: function () {
  console.log(this);
  return this.name;
},

// arrow function
getMarks: () => {
  console.log(this); // parent's scope  -> objec.func -> (window  parent ke this )  
return this.marks;
 },

 getInfo1: function()  {
 setTimeout ( ()  => { 
  console.log(this);
 }, 2000);

 },

 getInfo2: function () {
  setTimeout(function () {
    console.log(this);
  }, 200);  
 }
};




// student.getInfo1();
// undefined
// settimeout.js:57 
// {name: 'aman', marks: 95, prop: Window, getName: ƒ, getMarks: ƒ, …}
// student.getInfo2();
// undefined
// settimeout.js:64 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

 