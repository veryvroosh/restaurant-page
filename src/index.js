import "./styles.css"
import { createHomePage } from "./modules/homepage";
import { createMenuPage } from "./modules/menupage";

function removeContent () {
    const content = document.querySelector("#content");
    content.remove();
}

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

homeButton.addEventListener('click', () => {
    removeContent();
    createHomePage();
})

menuButton.addEventListener('click', () => {
    removeContent();
    createMenuPage();
})

aboutButton.addEventListener('click', () => {
    removeContent();
})

createHomePage()