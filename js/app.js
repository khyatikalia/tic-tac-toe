let boxes = document.querySelectorAll(".box");
let newGamebtn = document.querySelector("#restart");
let msgDisplay = document.querySelector("#winnerModal");
let msg = document.querySelector("#winnerMessage");
let x = "x";
let o = "o";
let turnO = true;
let count = 0;
let winnerVal = true;
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
};
boxes.forEach((box) => {
  box.addEventListener("click", boxClick);
});

function boxClick(box) {
  console.log("box was clicked");
  if (turnO) {
    box.currentTarget.innerHTML = o;
    turnO = false;
  } else {
    box.currentTarget.innerHTML = x;
    turnO = true;
  }
  box.currentTarget.disabled = "true";
  count++;
  winner();
  if (count === 9 && winnerVal) {
    gameDraw();
  }
}

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
    box.classList.remove("group/edit");
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
    msgDisplay.classList.add("hidden");
    box.style.backgroundColor = "";
  }
};

const showWinner = (w) => {
  msg.innerHTML = "Congratulations!!<br> the winner is " + w;
  msgDisplay.classList.remove("hidden");
  disableboxes();
};

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("winnerModal").classList.add("hidden"); // Hide the modal
  resetGame(); // Reset the game after closing the modal
});

const winner = () => {
  let value1;
  let value2;
  let value3;
  count++;
  let boxes = document.querySelectorAll(".box");
  let winnerVal = false;

  for (element of win) {
    value1 = boxes[element[0]].innerText;
    value2 = boxes[element[1]].innerText;
    value3 = boxes[element[2]].innerText;

    if (value1 !== "" && value2 !== "" && value3 !== "") {
      if (value1 === value2 && value2 === value3) {
        winnerVal = false;
        showWinner(value1);
        boxes[element[0]].style.backgroundColor = "#31c3bd";
        boxes[element[1]].style.backgroundColor = "#31c3bd";
        boxes[element[2]].style.backgroundColor = "#31c3bd";
        return;
      }
    }
  }
};

const gameDraw = () => {
  console.log("Game Draw triggered!");
  msg.innerHTML = "It's a draw!";
  msgDisplay.classList.remove("hidden");
  disableboxes();
};

newGamebtn.addEventListener("click", resetGame);
