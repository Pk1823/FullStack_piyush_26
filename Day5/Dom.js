/* DOM (Document  Object Model) */
// the DOM represrnts a document with a logical tree
// it allows us to manipulate/change webpage content (HTML elements).

  // 1 select  2  changes / Manipulation 

//     window
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.dir(document);
// VM139:1 #document
// undefined
//  console.log(document.all);
// VM1288:1 HTMLAllCollection(34) [html, head, body, h1, img#mainImg, h2, p, b, a, b, b, a, a, div.box, h4, ul, li, a.boxlink, li, a.boxlink, li, ul, li, a.boxlink, li, a.boxlink, h2, p#description, div.images, img.oldimg, img.oldimg, img.oldimg, script, script, mainImg: img#mainImg, description: p#description]
// undefined
//  console.log(document.all[8]);
// VM1861:1 <a href=​"Marvel.jpg">​</a>​
// undefined
//  console.log(document.all[3]);
// VM1895:1 <h1>​IRONMAN​</h1>​
// undefined
// console.dir(document.all[8]);
// VM2038:1 a
// undefined
// console.dir(document.all[3]);
// VM2046:1 h1
// undefined
// document.all[8].innerText = 'Peter Parker";
// VM2259:1 Uncaught SyntaxError: Invalid or unexpected token (at VM2259:1:29)
// console.dir(document.all[8].innerText);
// VM2421:1 
// undefined
// console.dir(document.all[8].innerHTML);
// VM2464:1 
// undefined
// let heading = document.querySelector("h1");
// heading.innerText = "Peter Parker";
// 'Peter Parker'
// let heading = document.querySelector("h1");
// heading.innerText = "IRONMAN";
// 'IRONMAN' 





/* SELECTING ELEMENT */

// getElementByld
// returns the Element as an object or null (if not found)  document.getELByid(id)

// document.getElementByid(mainImg);
// VM2784:1 Uncaught TypeError: document.getElementByid is not a function
//     at <anonymous>:1:10
// (anonymous) @ VM2784:1
// document.getElementByID("mainImg");
// VM2891:1 Uncaught TypeError: document.getElementByID is not a function
//     at <anonymous>:1:10
// document.getElementById("mainImg");
// <img src=​"https:​/​/​encrypted-tbn0.gstatic.com/​images?q=tbn:​ANd9GcRIHdmFkh5CgZPLwKv9ofMFDkZE8cXnuqH8Y1-SWc9iOw&s=10" id=​"mainImg">​
// // it is object
// undefined
// let imgobj = document.getElementById("mainImg");
// undefined
// imgobj
// <img src=​"https:​/​/​encrypted-tbn0.gstatic.com/​images?q=tbn:​ANd9GcRIHdmFkh5CgZPLwKv9ofMFDkZE8cXnuqH8Y1-SWc9iOw&s=10" id=​"mainImg">​
// console.dir(imgobj));
// VM3286:1 Uncaught SyntaxError: Unexpected token ')' (at VM3286:1:20)
// console.dir(imgObj));
// VM3298:1 Uncaught SyntaxError: Unexpected token ')' (at VM3298:1:20)
// console.dir(imgobj);
// VM3410:1 img#mainImg
// undefined
//  imgobj.src;
// 'http://127.0.0.1:5500/Day5/spiderman.jpg'
// imgobj.tagName;
// 'IMG'
// imgobj.id;
// 'mainImg'
// imgobj.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHdmFkh5CgZPLwKv9ofMFDkZE8cXnuqH8Y1-SWc9iOw&s=10";
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHdmFkh5CgZPLwKv9ofMFDkZE8cXnuqH8Y1-SWc9iOw&s=10'


// document.getElementBy
// undefined
// document.getElementById("description");
// <p id=​"description">​…​</p>​
// console.dir(document.getElementById("description"));
// VM3990:1 p#description
// undefined
//  document.getElementById("abc");
// null



/* SELECTING ELEMENTS*/


// getElementByClassName
// Returns the Elements as an HTML COllection or empty collection )(if not found)


// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++) { 
// console.dir(smallImages[i]);

//   // smallImages[i].src = "spiderman.jpg";
//   // console.log('value of image no. ${i} is changed. ');

// console.dir(smallImages[i].src);
// } 



/* SELECTING ELEMENTS*/    // By tag  Name

// Returns the Elements as an HTML COllection or empty collection )(if not found)
// document.getElementsByTagName("p");
// HTMLCollection(2) [p, p#description, description: p#description]
// 0
// : 
// p
// 1
// : 
// p#description
// description
// : 
// p#description
// length
// : 
// 2
// [[Prototype]]
// : 
// HTMLCollection

// document.getElementsByTagName("span");
// HTMLCollection []
// length
// : 
// 0
// [[Prototype]]
// : 
// HTMLCollection

 

/*  USING PROPERTIES & METHODS*/

// InnerText
// shows the visible text contained in a node 

//textContent 
// Shows all the full text

// innerHTML
// shows the full markup
