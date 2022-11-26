const writeElement = (element, text) => {
    element.innerHTML = text;
};

const Menu = () => {
    const container = document.getElementById("gameWrapper");
    const menuStart = document.getElementById("menu");
    const titleMenu = document.getElementById("title-menu");  
    const buttonMenu = document.getElementById("button-menu");  
    let start = true;

    if (start) {
        writeElement(titleMenu, "Welcome to River Raid!");
        writeElement(buttonMenu, "Play Game");
        buttonMenu.addEventListener("click", (e) => {
            menuStart.style.display = "none";
        });
    }
};

Menu();