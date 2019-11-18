// cemove DOM node "main#main"
document.querySelector("main#main").remove();

// create a new h1 html element
let newHeader = document.createElement("h1");

// assign an id to that element
newHeader.id = "victory";

// add html text to the that element
newHeader.innerHTML = "Tish is the champion";