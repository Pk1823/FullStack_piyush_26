// style Property  
// obj.style         // background - image   but in js use cammel case     


let links = document.querySelectorAll(".box a" );
for (link of links) {
    link.style.color = "purple";    // inline  hota hai 

}

// for(let i = 0; i < links.length; i++) {
//     links[i].style.color = "green";

// } 

// let box = document.querySelector('.box');
// undefined
// box.style;
// CSSStyleDeclaration {0: 'background-color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}