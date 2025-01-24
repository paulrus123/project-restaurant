export default function loadMenuPage () {    
    let title = document.createElement("h1");
    title.textContent = "The Restaurant"
    
    let paragraph = document.createElement("p")
    paragraph.textContent = "Here's the menu"

    let content = document.getElementById("content");
    content.innerHTML = ""
    content.appendChild(title)
    content.appendChild(paragraph)
}