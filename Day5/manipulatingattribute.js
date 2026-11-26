// id , class , style img - src 

/* Manipulating Attribute  */


obj.getAttribute(attr)
obj.setAttribute(attr, val)     // getters and setters 








// QuerySelectors.js:10 NodeList [h1]
// let img = document.querySelector("img;
// VM1430:1 Uncaught SyntaxError: Invalid or unexpected token (at VM1430:1:34)
// let img = document.querySelector("img");
// undefined
// img
// <img src=​"spiderman.jpg" id=​"spidermanImg" class=​"images">​
// img.getattribute('id;
// VM1556:1 Uncaught SyntaxError: Invalid or unexpected token (at VM1556:1:18)
// img.getattribute('id');
// VM1569:1 Uncaught TypeError: img.getattribute is not a function
//     at <anonymous>:1:5
// img.getAttribute('id');
// 'mainImg'
// img.setAttribute('id','spidermanImg');
// undefined
//  img
// <img src=​"spiderman.jpg" id=​"spidermanImg" class=​"images">​
// img.getAttributed('class');
// VM1892:1 Uncaught TypeError: img.getAttributed is not a function
//     at <anonymous>:1:5
// img.getAttribute('class');
// null
// img.setAttribute('class', 'images');
// undefined
// img.getAttribute('class');
// 'images'