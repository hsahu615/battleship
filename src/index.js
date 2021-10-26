const gameboard = require("./gameboard");
const createShip = require("./ship");
import "./style.css";

let btn = document.getElementById("submitBtn");
btn.onclick = startGame;

// let resBtn = document.getElementById("restartBtn");
// resBtn.addEventListener("click", () => {
//   window.location.reload();
// });

let computerGrid = document.querySelector(".computer");
let computer = new gameboard(computerGrid);

let userGrid = document.querySelector(".user");
let users = new gameboard(userGrid);

let userShips = [
  {
    name: "Carrier",
    length: 5,
  },
  {
    name: "Battleship",
    length: 4,
  },
  {
    name: "Cruiser",
    length: 3,
  },
  {
    name: "Submarine",
    length: 3,
  },
  {
    name: "Destroyer",
    length: 2,
  },
];

function placeUserShips() {
  document.querySelector(".container").style.display = "flex";
  for (let i = 0; i < 5; i++) {
    while (true) {
      let inputID = prompt(`Enter cordinates for ${userShips[i].name}`);
      userShips[i]["info"] = new createShip(
        userShips[i].name,
        userShips[i].length
      );

      if (inputID.length > 3) {
        alert("Enter right coordinates");
        continue;
      }

      userShips[i].info.rotated = inputID.split("")[0] == "-" ? true : false;
      let x = Number(inputID.split("")[0]);
      let y = Number(inputID.split("")[1]);
      if (String(users.gridArray[x][y]).slice(0, 8) == "userShip") {
        alert("Place is occupied by other Ship");
      }
      if (userShips[i].info.rotated && y > 10 - userShips[i].length) {
        alert("Ship can't placed outside board");
        continue;
      }
      if (!userShips[i].info.rotated && x > 10 - userShips[i].length) {
        alert("Ship can't placed outside board");
        continue;
      }
      let flag = false;
      for (let j = 0; j < userShips[i].length; j++) {
        if (userShips[i].info.rotated) {
          if (String(users.gridArray[x][y + j]).slice(0, 8) == "userShip") {
            flag = true;
            alert("Place is occupied by other Ship");
            while (j >= 0) {
              users.gridArray[x][y + j] = undefined;
              j--;
            }
            break;
          }
          users.gridArray[x][y + j] = `userShip${userShips[i].name}`;
        } else {
          if (
            users.gridArray[x + j][y] &&
            users.gridArray[x + j][y].slice(0, 8) == "userShip"
          ) {
            flag = true;
            alert("Place is occupied by other Ship");
            while (j >= 0) {
              users.gridArray[x + j][y] = undefined;
              j--;
            }
            break;
          }
          users.gridArray[x + j][y] = `userShip${userShips[i].name}`;
        }
      }
      if (flag) continue;
      else {
        break;
      }
    }
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (String(users.gridArray[i][j]).slice(0, 8) == "userShip") {
        document.getElementById(`user${i}${j}`).style["background-color"] =
          "black";
      }
    }
  }
}

let computerShips = [
  {
    name: "Carrier",
    length: 5,
  },
  {
    name: "Battleship",
    length: 4,
  },
  {
    name: "Cruiser",
    length: 3,
  },
  {
    name: "Submarine",
    length: 3,
  },
  {
    name: "Destroyer",
    length: 2,
  },
];

function placeComputerShips(computerShips, computer) {
  for (let i = 0; i < 5; i++) {
    while (true) {
      computerShips[i]["info"] = new createShip(
        computerShips[i].name,
        computerShips[i].length
      );
      let randomRotate = Math.floor(Math.random() * 2);
      computerShips[i].info.rotated = Array(["true", "false"])[randomRotate];
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);

      if (String(computer.gridArray[x][y]).slice(0, 7) == "oppShip") {
        continue;
      }
      if (computerShips[i].info.rotated && y > 10 - computerShips[i].length) {
        continue;
      }
      if (!computerShips[i].info.rotated && x > 10 - computerShips[i].length) {
        continue;
      }
      let flag = false;
      for (let j = 0; j < computerShips[i].length; j++) {
        if (computerShips[i].info.rotated) {
          if (String(computer.gridArray[x][y + j]).slice(0, 7) == "oppShip") {
            flag = true;
            while (j >= 0) {
              computer.gridArray[x][y + j] = undefined;
              j--;
            }
            break;
          }
          computer.gridArray[x][y + j] = `oppShip${computerShips[i].name}`;
        } else {
          if (String(computer.gridArray[x + j][y]).slice(0, 7) == "oppShip") {
            flag = true;
            while (j >= 0) {
              computer.gridArray[x + j][y] = undefined;
              j--;
            }
            break;
          }
          computer.gridArray[x + j][y] = `oppShip${computerShips[i].name}`;
        }
      }
      if (flag) continue;
      else {
        break;
      }
    }
  }
  // for (let i = 0; i < 10; i++) {
  //   for (let j = 0; j < 10; j++) {
  //     if (String(computer.gridArray[i][j]).slice(0, 7) == "oppShip") {
  //       document.getElementById(`computer${i}${j}`).style["background-color"] =
  //         "black";
  //     }
  //   }
  // }
}

function startGame() {
  placeUserShips();
  placeComputerShips(computerShips, computer);
  playGame();
}

let computerScore = 0;
let userScore = 0;

let player = "user";

function playGame() {
  if (isGameOver()) {
    return;
  }
  if (player === "user") {
    let divs = document.querySelectorAll(".computerBox");
    divs.forEach(function (div) {
      div.addEventListener(
        "click",
        (e) => {
          userChance(div);
        },
        {
          once: true,
        }
      );
    });
  } else if (player === "computer") {
    setTimeout(computerChance, 1000);
  }
}

function userChance(div) {
  document.getElementById("infoLine").textContent = "Computer's turn";
  try {
    let shipName =
      computer.gridArray[Number(div.id.slice(-2, -1))][
        Number(div.id.slice(-1))
      ].slice(7);
    if (shipName == "Carrier") {
      computerShips[0].info.hits++;
      userScore++;
      if (computerShips[0].info.isSunk()) {
        document.getElementById(
          "winnerLine"
        ).textContent = `User defeats computer's Carrier`;
      }
    }
    if (shipName == "Battleship") {
      userScore++;
      computerShips[1].info.hits++;
      if (computerShips[1].info.isSunk()) {
        document.getElementById(
          "winnerLine"
        ).textContent = `User defeats computer's Battleship`;
      }
    }
    if (shipName == "Cruiser") {
      computerShips[2].info.hits++;
      userScore++;
      if (computerShips[2].info.isSunk()) {
        document.getElementById(
          "winnerLine"
        ).textContent = `User defeats computer's Cruiser`;
      }
    }
    if (shipName == "Submarine") {
      computerShips[3].info.hits++;
      userScore++;
      if (computerShips[3].info.isSunk()) {
        document.getElementById(
          "winnerLine"
        ).textContent = `User defeats computer's Submarine`;
      }
    }
    if (shipName == "Destroyer") {
      computerShips[4].info.hits++;
      userScore++;
      if (computerShips[4].info.isSunk()) {
        document.getElementById(
          "winnerLine"
        ).textContent = `User defeats computer's Destroyer`;
      }
    }
    div.innerHTML = "X";
  } catch (err) {
    let span = document.createElement("span");
    span.id = "whiteDot";
    div.appendChild(span);
  }
  player = "computer";
  playGame();
}

let computerCordArray = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
];
function computerChance() {
  document.getElementById("infoLine").textContent = "Your turn";
  let cord =
    computerCordArray[Math.floor(Math.random() * computerCordArray.length)];
  let div = document.getElementById(`user${cord}`);
  computerCordArray.splice(computerCordArray.indexOf(cord), 1);
  let x = Number(cord.split("")[0]);
  let y = Number(cord.split("")[1]);
  try {
    let shipName = users.gridArray[x][y].slice(8);
    console.log(shipName);
    if (shipName == "Carrier") {
      userShips[0].info.hits++;
      computerScore++;
      div.innerHTML = "X";
      if (userShips[0].info.isSunk()) {
        document.getElementById(
          "winnerLine"
        ).textContent = `Computer Defeats your Carrier`;
      }
    } else if (shipName == "Battleship") {
      userShips[1].info.hits++;
      div.innerHTML = "X";
      computerScore++;
      if (userShips[1].info.isSunk()) {
        document.getElementById(
          "winnerLine"
        ).textContent = `Computer Defeats your Battleship`;
      }
    } else if (shipName == "Cruiser") {
      userShips[2].info.hits++;
      div.innerHTML = "X";
      computerScore++;
      if (userShips[2].info.isSunk()) {
        document.getElementById(
          "winnerLine"
        ).textContent = `Computer Defeats your Cruiser`;
      }
    } else if (shipName == "Submarine") {
      userShips[3].info.hits++;
      div.innerHTML = "X";
      computerScore++;
      if (userShips[3].info.isSunk()) {
        document.getElementById(
          "winnerLine"
        ).textContent = `Computer Defeats your Submarine`;
      }
    } else if (shipName == "Destroyer") {
      userShips[4].info.hits++;
      div.innerHTML = "X";
      computerScore++;
      if (userShips[4].info.isSunk()) {
        document.getElementById(
          "winnerLine"
        ).textContent = `Computer Defeats your Destroyer`;
      }
    }
  } catch (err) {
    let span = document.createElement("span");
    span.id = "whiteDot";
    div.appendChild(span);

    player = "user";
  }
}

function isGameOver() {
  if (userScore >= 17) {
    document.getElementById("infoLine").textContent = "You Won!!!!";
    return true;
  } else if (computerScore >= 17) {
    document.getElementById("infoLine").textContent =
      "You Lose :( Better Luck Next Time....!";
    return true;
  }
  return false;
}
