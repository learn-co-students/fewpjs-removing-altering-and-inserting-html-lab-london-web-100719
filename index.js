let main = document.querySelector('#main')
main.remove()

let newHeader = document.createElement('h1')
newHeader.className = "victory"

newHeader.id = "victory"

newHeader.innerHTML += " You is the champion"
