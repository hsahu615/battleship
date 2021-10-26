function createShip(nam, len) {
  let hits = [];
  return {
    name: nam,
    length: len,
    hits: 0,
    isSunk() {
      return this.hits == this.length;
    },
    rotated: true,
  };
}

module.exports = createShip;
