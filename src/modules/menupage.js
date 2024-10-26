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

        // Use setTimeout to add the 'show' class after the overlay is added
        setTimeout(() => {
            overlay.classList.add("show");
        }, 0);

        // Start the fade-out effect after 5 seconds
        setTimeout(() => {
            cursedImage.classList.add("fade-out"); // Fade out the image
            overlay.style.backgroundColor = "black"; // Keep the overlay black
        }, 3000); // Delay for 5 seconds before starting the fade out
    })
}