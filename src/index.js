import loadMainPage from "./mainPage"
import loadMenuPage from "./menuPage";
import loadContactPage from "./contactPage";

const mainButton = document.getElementById("mainButton")
const menuButton = document.getElementById("menuButton")
const contactButton = document.getElementById("contactButton")

let currButton = "main";

function refreshButtons () {
    mainButton.disabled = false;
    menuButton.disabled = false;
    contactButton.disabled = false;
    switch (currButton) {
        case "main":
            mainButton.disabled = true;
            break;
        case "menu":
            menuButton.disabled = true;
            break;
        case "contact":
            contactButton.disabled = true;
            break;
    }
}

mainButton.addEventListener('click', () => {
    currButton = "main"
    refreshButtons();
    loadMainPage();
})
menuButton.addEventListener('click', () => {
    currButton = "menu"
    refreshButtons();
    loadMenuPage();
})
contactButton.addEventListener('click', () => {
    currButton = "contact"
    refreshButtons();
    loadContactPage();
})

loadMainPage();
mainButton.disabled = true;