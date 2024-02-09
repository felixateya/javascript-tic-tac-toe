const board = document.getElementById("board");
const cells = Array.from(document.querySelectorAll(".cell"));
let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function handleClick(index) {
  if (gameOver || gameBoard[index] !== "") return;

  gameBoard[index] = currentPlayer;
  render();
  checkWinner();
  currentPlayer = currentPlayer === player1 ? player2 : player1;
}

function render() {
  gameBoard.forEach((symbol, index) => {
    cells[index].textContent = symbol;
  });
}

let declareWinner = document.getElementById("declareWinner");

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      declareWinner.textContent =
        gameBoard[a] === "X" ? "Player 1 wins!!" : "Player 2 wins!!";
      gameOver = true;
      return;
    }
  }

  if (!gameBoard.includes("")) {
    declareWinner.textContent = "It's a tie!";
    gameOver = true;
  }
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  currentPlayer = "X";
  render();
  declareWinner.textContent = "Tic_Tac_Toe";
}
