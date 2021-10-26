function gameboard(grid) {
  let gridArray = new Array(10);
  for (let i = 0; i < 10; i++) {
    gridArray[i] = new Array(10);
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let mySquare = document.createElement("div");
      mySquare.id = `${grid.classList[0]}${i}${j}`;
      mySquare.classList.add("square");
      mySquare.classList.add(`${grid.classList[0]}Box`);
      grid.appendChild(mySquare);
    }
  }
  return { gridArray };
}

module.exports = gameboard;
