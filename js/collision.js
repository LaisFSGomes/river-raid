function collidedInObstacles(naruto, obstacles) {
    let collided = false;
    obstacles.lines.map((line) => {
      if (!collided) {
        const left = line.arrayObstacles[0].object;
        const middle = line.arrayObstacles[1].object;
        const right = line.arrayObstacles[2].object;
  
        collided =
          superposition(naruto.object, left) ||
          superposition(naruto.object, middle) ||
          superposition(naruto.object, right);
      }
    });
    return collided;
  }