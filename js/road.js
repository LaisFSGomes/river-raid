const freeWay = (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    obstacles.current = 5;
    for (let line = start; line < final; line++) {
      obstacles.lines[line].arrayObstacles[0].object.style =
        "grid-column: 1/2;";
      obstacles.lines[line].arrayObstacles[1].object.style =
        "display: none;";
      obstacles.lines[line].arrayObstacles[2].object.style =
        "grid-column: 10/11;";
    }
  };
  
  const leftToRight= (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    let count = 0;
    obstacles.current = 4;
    for (let line = start; line < final; line++) {
      if (count < 1) {
        obstacles.lines[line].arrayObstacles[0].object.style =
          "display: none;";
      } else {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${count + 1};`;
      }
      obstacles.lines[line].arrayObstacles[1].object.style =
        "display: none;";
      obstacles.lines[
        line
      ].arrayObstacles[2].object.style = `grid-column: ${count + 5}/11;`;
      count++;
    }
  };
  
  const rightToLeft = (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    obstacles.current = 3;
    let count = 0;
    for (let line = start; line < final; line++) {
      obstacles.lines[
        line
      ].arrayObstacles[0].object.style = `grid-column: 1/${7 - count};`;
      obstacles.lines[
        line
      ].arrayObstacles[2].object.style = `grid-column: ${11 - count}/11;`;
      obstacles.lines[line].arrayObstacles[1].object.style =
        "display: none;";
      if (count > 5) {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `display:none;`;
      }
      count++;
    }
  };
  
  const leftToMiddleToRight= (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    let count = 0;
    obstacles.current = 3;
    for (let line = start; line < final; line++) {
      obstacles.lines[line].arrayObstacles[1].object.style =
        "display: none;";
      if (count > 3) {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${8 - count};`;
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${12 - count}/11;`;
      } else {
        if (count < 1) {
          obstacles.lines[line].arrayObstacles[0].object.style =
            "display: none";
        } else {
          obstacles.lines[
            line
          ].arrayObstacles[0].object.style = `grid-column: 1/${count + 1};`;
        }
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${count + 5}/11;`;
      }
      count++;
    }
  };
  
  const rightToMiddleToRight= (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    let count = 0;
    obstacles.current = 4;
    for (let line = start; line < final; line++) {
      obstacles.lines[line].arrayObstacles[1].object.style =
        "display: none;";
      if (count > 3) {
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${count + 4}/11;`;
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${count};`;
      } else {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${7 - count};`;
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${11 - count}/11;`;
      }
      count++;
    }
  };
  const leftToMiddle = (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    let count = 0;
    obstacles.current = 5;
    for (let line = start; line < final; line++) {
      obstacles.lines[line].arrayObstacles[1].object.style =
        "display: none;";
      if (count > 3) {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${8 - count};`;
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${count + 4}/11;`;
      } else {
        if (count < 1)
          obstacles.lines[line].arrayObstacles[0].object.style =
            "display: none";
        else
          obstacles.lines[
            line
          ].arrayObstacles[0].object.style = `grid-column: 1/${count + 1};`;
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${count + 5}/11;`;
      }
      count++;
    }
  };
  
  const rightToMiddle = (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    let count = 0;
    obstacles.current = 5;
    for (let line = start; line < final; line++) {
      obstacles.lines[line].arrayObstacles[1].object.style =
        "display: none;";
      if (count > 3) {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${8 - count};`;
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${count + 4}/11;`;
        if (count > 6) {
          obstacles.lines[
            line
          ].arrayObstacles[0].object.style = `grid-column: 1/2;`;
          obstacles.lines[
            line
          ].arrayObstacles[2].object.style = `grid-column: 10/11;`;
        }
      } else {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${7 - count};`;
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${11 - count}/11;`;
      }
      count++;
    }
  };
  
  const middleToRight= (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    let count = 0;
    obstacles.current = 4;
    for (let line = start; line < final; line++) {
      obstacles.lines[line].arrayObstacles[1].object.style =
        "display: none;";
      obstacles.lines[
        line
      ].arrayObstacles[0].object.style = `grid-column: 1/2;`;
      obstacles.lines[
        line
      ].arrayObstacles[2].object.style = `grid-column: 10/11;`;
      if (count > 1)
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${count + 1};`;
      if (count == 6)
        obstacles.lines[line].arrayObstacles[2].object.style =
          "display: none;";
      count++;
    }
  };
  
  const middleToLeft = (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    let count = 0;
    obstacles.current = 3;
    for (let line = start; line < final; line++) {
      obstacles.lines[line].arrayObstacles[1].object.style =
        "display: none;";
      obstacles.lines[
        line
      ].arrayObstacles[0].object.style = `grid-column: 1/2;`;
      obstacles.lines[
        line
      ].arrayObstacles[2].object.style = `grid-column: 10/11;`;
      if (count > 1)
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${11 - count}/11;`;
      if (count == 6)
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `display: none;`;
      count++;
    }
  };
  
  const zigZag = (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    let count = 0;
    obstacles.current = 5;
    for (let line = start; line < final; line++) {
      obstacles.lines[line].arrayObstacles[1].object.style =
        "display: none;";
      if (count < 4) {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${count + 3};`;
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${count + 6}/11;`;
        if (count == 0)
          obstacles.lines[
            line
          ].arrayObstacles[2].object.style = `grid-column: 7/11;`;
      } else {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${10 - count};`;
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${13 - count}/11;`;
        if (count == 6)
          obstacles.lines[
            line
          ].arrayObstacles[2].object.style = `grid-column: 8/11;`;
      }
  
      count++;
    }
  };
  
  const bifurcation = (position, obstacles) => {
    let final = position * 7;
    let start = final - 7;
    let count = 0;
    obstacles.current = 5;
    for (let line = start; line < final; line++) {
      obstacles.lines[
        line
      ].arrayObstacles[1].object.style = `display: none`;
      obstacles.lines[
        line
      ].arrayObstacles[0].object.style = `grid-column: 1/${3 - count};`;
      obstacles.lines[
        line
      ].arrayObstacles[2].object.style = `grid-column: ${count + 9}/11`;
      if (count > 0 && count < 4)
        obstacles.lines[
          line
        ].arrayObstacles[1].object.style = `grid-column: ${6 - count}/${
          count + 6
        }`;
      if (count > 3)
        obstacles.lines[
          line
        ].arrayObstacles[1].object.style = `grid-column: ${count}/${12 - count}`;
      if (count == 6)
        obstacles.lines[
          line
        ].arrayObstacles[1].object.style = `display:none;`;
      if (count > 1 && count < 5) {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `display: none`;
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `display: none`;
      } else if (count > 4) {
        obstacles.lines[
          line
        ].arrayObstacles[0].object.style = `grid-column: 1/${count - 3};`;
        obstacles.lines[
          line
        ].arrayObstacles[2].object.style = `grid-column: ${15 - count}/11`;
      }
      count++;
    }
  };
  