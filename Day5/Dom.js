// The Document Object Model (DOM) is a programming interface that represents an HTML web page as a structured tree of objects in browser memory.
//  It allows JavaScript to dynamically read, change, add, or delete a webpage's content, structure, and styles
// 1. Naya element create karein
const newLi = document.createElement("li");

// 2. Uske andar text daalein
newLi.innerText = "Item 4 (Added via JS)";

// 3. Kis parent element mein jodna hai use select karein (jaise ek <ul> jiska id 'my-list' hai)
const ulList = document.getElementById("my-list");

// 4. Us list ke andar element ko append kar dein
ulList.appendChild(newLi);