import cursed from '../assets/images/cursed.png'

export function createMenuPage () {
    const content = document.createElement("div");
    const noMenu = document.createElement("div");
    const cursedImage = document.createElement("img");

    content.id = "content";
    noMenu.id = "menu-not-found";
    cursedImage.src = cursed;
    cursedImage.alt = "money"

    noMenu.textContent = "No Menu Items found"

    document.body.appendChild(content);
    content.appendChild(noMenu);

    noMenu.addEventListener('click', () => {
        const overlay = document.createElement("div");
        overlay.classList.add("cursed-mode");


        overlay.appendChild(cursedImage);

        document.body.appendChild(overlay);

        cursedImage.style.display = "block";
    })
}