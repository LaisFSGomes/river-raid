function Naruto (widthGame, size, movement) {
    this.object = newElement("div", "naruto");
    this.image = newElement("img",  "narutoImg");
    this.image.src = "../img/naruto.png";
    this.object.appendChild(this.image);
    this.left = false;
    this.right = false;
    this.getWalk = () => parseInt(this.object.style.left.split("px")[0]);
    this.setWalk = (x) => this.object.style.left = `${x}px`;
    this.setWalk(widthGame/2 - size/2);
    window.onkeydown = (event) => {
        if (event.key === "ArrowLeft" && this.getWalk() > 0) {
          this.left = true;
        } else if (event.key === "ArrowRight" && this.getWalk() < (widthGame-size)) {
          this.right = true;
        }
    };
    this.run = () => {
        if (this.left) {
            this.setWalk(this.getWalk() - movement);
        }
        if (this.right && this.getWalk() < (widthGame-size)){
            this.setWalk(this.getWalk() + movement);
        }
        this.left = false;
        this.right = false;
    };
}