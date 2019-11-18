// // Write your code here!
// // Write your code here!
// // append: add to the end

// //CREATING ELEMENTS:
// let element = document.createElement('div')
// document.body.appendChild(element)

// let ul = document.createElement('ul')
// for (let i = 0; i < 3; i += 1) {
//     let li = document.createElement('li')
//     li.innerHTML = (i + 1).toString()
//     ul.appendChild(li)
// }

// element.appendChild(ul)

// // let jeremy = document.getElementById("jeremy")
// // console.log(jeremy.innerHTML)

// //ADDING ELEMENTS:
// //appendChild is used to add elements whereas
// // append is used to add elements but also strings.
// //document.body.append("my name is rotimi")

// let element = document.querySelector("p#greeting");
// element.innerHTML = 'Hello, DOM!'
// let header = document.getElementById("div#header");
// header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";


// //document.getElementById("header").append("Hello");

// // document.getElementById("header").appendChild(element)

// //CHANGING PROPERTIES on DOM NODES:

// element.style.backgroundColor = '#27647B';
// element.style.textAlign = 'center';
// ul.style.textAlign = 'left';

// element.className = "dog"
// element.className = "pet-listing dog"

// element.classList.remove("this-is-fine");
// element.classList.add("the-room-is-on-fire");


// //REMOVING ELEMENTS FROM THE DOM:
// // let my = document.getElementById("jeremy")
// // my.remove()

// // let body = document.querySelector("body")
// // body.removeChild(my)

// ul.removeChild(ul.querySelector('li:nth-child(2)'))

const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
const node = document.createTextNode("is the champion");
newHeader.appendChild(node);
element.appendChild(newHeader);
