export default function loadContactPage () {    
    let title = document.createElement("h1");
    title.textContent = "The Restaurant"
    
    let paragraph = document.createElement("p")
    paragraph.textContent = "Here's our contact info"

    let content = document.getElementById("content");
    content.innerHTML = ""
    content.appendChild(title)
    content.appendChild(paragraph)
}