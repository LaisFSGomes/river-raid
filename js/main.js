function RiverRaid() {
    const windowGame = document.getElementById("window-game");
    const widthGame = windowGame.clientWidth;
    const displacement = 4;
    const obstacles = new Obstacles();
    const progress = new Progress();
    const naruto = new Naruto(widthGame, 40, 30);

    this.gameover = false;
    this.getPoints = () => {
      return progress.getPoints();
    };
  
    obstacles.lines.map((line) => windowGame.appendChild(line.object));
    windowGame.appendChild(naruto.object);
    windowGame.appendChild(progress.object);
  
    this.run = () => {
      obstacles.lines.map((line) => {
        if (line.getHeight() >= 500) line.setHeight(-line.object.clientHeight * 9);
        line.setHeight(line.getHeight() + displacement);
      });
    };
  
    this.start = () => {
      const delayer = setInterval(() => {
        naruto.run();
        this.run();
        scene(obstacles);
        if (collidedInObstacles(naruto, obstacles)) {
          clearInterval(delayer);
          clearInterval(delayerProgress);
          this.gameover = true;
        }
      }, 15);
      const delayerProgress = setInterval(() => {
        progress.updatePoints();
      }, 1000);
    };
  }
  

new Menu();
