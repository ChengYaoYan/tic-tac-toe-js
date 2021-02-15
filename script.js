const player = document.getElementById("player");
const pieceContainers = Array.from(document.getElementsByClassName("piece-container"));

let winner = "None";
let gameStillGoing = true;

const playGame = () => {
  pieceContainers.map((piece) => {
    piece.addEventListener("click", () => {
      handleTurn(piece);

      checkIfGameOver();

      flipPlayer();

      if (gameStillGoing == false) {
        if (winner != "None") {
          alert(`winner: ${winner}`);
        } else {
          alert("tie");
        }
      }
    });
  });
};

const handleTurn = (piece) => {
  piece.textContent = player.textContent;
};

const checkIfGameOver = () => {
  checkForWinner();
  checkIfTie();
};

const checkForWinner = () => {
 const board = pieceContainers.map(piece => piece.textContent);

  // check rows
  if (board[0] == board[1] && board[1] == board[2] && board[0] !== "-") {
    winner = board[0];
    gameStillGoing = false;
  } else if (board[3] == board[4] && board[4] == board[5] && board[3] !== "-") {
    winner = board[3];
    gameStillGoing = false;
  } else if (board[6] == board[7] && board[7] == board[8] && board[6] !== "-") {
    winner = board[6];
    gameStillGoing = false;
    // check columns
  } else if (board[0] == board[3] && board[3] == board[6] && board[0] !== "-") {
    winner = board[0];
    gameStillGoing = false;
  } else if (board[1] == board[4] && board[4] == board[7] && board[1] !== "-") {
    winner = board[1];
    gameStillGoing = false;
  } else if (board[2] == board[5] && board[5] == board[8] && board[2] !== "-") {
    winner = board[2];
    gameStillGoing = false;
    // check diagonals
  } else if (board[0] == board[4] && board[4] == board[8] && board[0] !== "-") {
    winner = board[0];
    gameStillGoing = false;
  } else if (board[2] == board[4] && board[4] == board[6] && board[2] !== "-") {
    winner = board[2];
    gameStillGoing = false;
  }
};

const checkIfTie = () => {
 const board = pieceContainers.map(piece => piece.textContent);

 if (board.indexOf("-") == -1) {
   gameStillGoing = false;
 }
};

const flipPlayer = () => {
  if (player.textContent == "X") {
    player.textContent = "O";
  } else {
    player.textContent = "X";
  }
};

playGame();