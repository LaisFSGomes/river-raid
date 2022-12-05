const { write } = require("fs");

function Menu() {
    const menu = getElementSelector('#menu-container');
    const menuTitle = getElementSelector('#title-menu');
    const finalSituation = getElementSelector('result');
    const button = getElementSelector('.button');
    this.start = true;
    let game = new RiverRaid();
  
    if (this.start) {
      writeOnElement(menuTitle, 'Naruto River Raid');
      writeOnElement(button, 'start');
      button.addEventListener('click', (event) => {
        changeZindex(menu, -1);
        game.start();
      });
    }
  
    button.addEventListener('click', (event) => {
      if (game.gameover) {
        changeZindex(menu, -1);
  
        const windowGame = document.getElementById('window-game');
        removeChildren(windowGame);
  
        game = new RiverRaid();
        game.start();
      }
    });
  
    setInterval(() => {
      if (game.gameover) {
        changeZindex(menu, 2);
        writeOnElement(menuTitle, 'Game Over');
        writeOnElement(button, 'restart');
        writeOnElement(finalSituation, `${game.getSituation().toString} points `);
        
      }
    }, 20);
  }
  