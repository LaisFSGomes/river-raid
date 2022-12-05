function Obstacle() {
    this.object = newElement("div", "obstacle");
  }
  
  function ObstaclesLine() {
    this.object = newElement("div", "obstacle-line");
    this.arrayObstacles = [new Obstacle(), new Obstacle(), new Obstacle()];
  
    this.arrayObstacles.map((obstacle) =>
      this.object.appendChild(obstacle.object)
    );
  
    this.getHeight = () => parseInt(this.object.style.top.split("px")[0]);
    this.setHeight = (y) => (this.object.style.top = `${y}px`);
    this.getLength = () => this.object.clientHeight;
    this.setHeight(0);
  }
  
  function Obstacles() {
    this.lines = [
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
      new ObstaclesLine(),
    ];
  
    this.getLastObjectContainer = (position) => {
      let lastObjectContainer = 7 * position;
      return this.lines[lastObjectContainer - 1].getHeight();
    };
    this.current = -1;
  
    this.startBottom = false;
    this.startTop = false;
  
    this.limparParticao = (position) => {
      let final = position * 7;
      let start = final - 7;
      for (let line = start; line < final; line++) {
        this.lines[line].arrayObstacles[0].object.style = "display: flex;";
        this.lines[line].arrayObstacles[1].object.style = "display: flex;";
        this.lines[line].arrayObstacles[2].object.style = "display: flex;";
      }
    };
    this.distancing = () => {
      let i = 0;
      this.lines.map((line) => {
        line.setHeight(-i * 100);
        i++;
      });
    };
    this.distancing();
  
    const displacement = 3;
    this.run = () => {
      this.lines.map((line) => {
        if (line.getHeight() < 900) {
          line.setHeight(-50);
        }
        line.setHeight(line.getHeight() + displacement);
      });
    };
  }