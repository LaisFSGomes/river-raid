function Progress() {
    this.object = newElement("span", "progress");
    this.points = -1;
    
    this.updatePoints = () => {
      this.points += 1;
      writeOnElement(this.object, this.points);
    };
    this.updatePoints();
    this.getPoints = () => {
      return this.points;
    };
  }