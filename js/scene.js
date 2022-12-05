const functionsToChoice = [
  [
    leftToRight,
    leftToMiddle,
    leftToMiddleToRight,
  ],
  [
    rightToLeft,
    rightToMiddle,
    rightToMiddleToRight,
  ],
  [
    middleToRight,
    middleToLeft,
    freeWay,
    bifurcation,
    zigZag,
  ],
  [
    rightToLeft,
    leftToMiddleToRight,
    middleToLeft,
  ],
  [
    leftToRight,
    rightToMiddleToRight,
    middleToRight,
  ],
  [
    leftToMiddle,
    rightToMiddle,
    bifurcation,
    zigZag,
  ],
];

const scene = (obstacles) => {
  if (
    obstacles.startBottom == false ||
    obstacles.getLastObjectContainer(1) >= 500
  ) {
    if (obstacles.current == -1) {
      functionsToChoice[2][2](1, obstacles);
    } else choosing(choiceFunction(obstacles))(1, obstacles);
    obstacles.startBottom = true;
  }
  if (
    obstacles.startTop == false ||
    obstacles.getLastObjectContainer(2) >= 500
  ) {
    choosing(choiceFunction(obstacles))(2, obstacles);
    obstacles.startTop = true;
  }
};
const choosing = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];
  return randomElement;
};

const choiceFunction = (obstacles) => {
  if (obstacles.current === 3) return functionsToChoice[0];
  if (obstacles.current === 4) return functionsToChoice[1];
  if (obstacles.current === 5) return functionsToChoice[2];
};
