// Write your code here!
// console.log("Hello Wolrd");
let main = document.querySelector('main');

main.remove();

let newHeader = document.createElement('h1');

newHeader.id = "victory";

newHeader.innerHTML = "Jason is the champion";
newHeader.innerText = "Im going to KILL MOD 3!!";

document.body.appendChild(newHeader);