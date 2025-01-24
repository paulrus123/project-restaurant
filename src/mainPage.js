import sampleImage from "./images/sample.png"

export default function loadMainPage () {    


    let title = document.createElement("h1");
    title.textContent = "The Restaurant"

    let image = document.createElement("img");
    image.src = sampleImage
    
    let paragraph = document.createElement("p")
    paragraph.textContent = "What a great place"

    let content = document.getElementById("content");
    content.innerHTML = ""
    content.appendChild(title)
    content.appendChild(image)
    content.appendChild(paragraph)
}