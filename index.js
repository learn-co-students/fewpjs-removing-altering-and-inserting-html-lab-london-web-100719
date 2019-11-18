// Write your code here!

let main = document.querySelector("main")
main.remove()

let newHeader = document.createElement('h1')
newHeader.setAttribute('id','victory')
newHeader.textContent = 'Gee is the champion'
document.body.prependChild(newHeader)
