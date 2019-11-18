// Write your code here!

// remove main
document.querySelector("main#main").remove()
// remove works only on Selector directly for collections (SelecterAll). Iterate throught the elements!

const newHeader = document.createElement("h1")
// create elements with const!

newHeader.id = "victory";

newHeader.innerHTML = "Florian is the champion";
// newHeader.setAttribute('innerHTML', "Florian is the champion");
// var name = "Florian"
// newHeader.innerHTML = `${name} is the champion`;

newHeader.className = "victory";