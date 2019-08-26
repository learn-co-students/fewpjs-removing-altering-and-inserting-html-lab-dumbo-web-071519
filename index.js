// Write your code here!

var main = document.querySelector("main#main");
main.remove();

var newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.innerHTML = "Ashna is the champion"

document.body.appendChild(newHeader);
