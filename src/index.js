import "./styles.css"
import { createHomePage } from "./modules/homepage";

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
})

aboutButton.addEventListener('click', () => {
    removeContent();
})

createHomePage();