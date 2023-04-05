// Tic Tac Toe game
// Console-based version

// Define the game board as a 2D array
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// Define a function to display the board in the console
function displayBoard() {
  console.log(board[0][0] + '|' + board[0][1] + '|' + board[0][2]);
  console.log('-+-+-');
  console.log(board[1][0] + '|' + board[1][1] + '|' + board[1][2]);
  console.log('-+-+-');
  console.log(board[2][0] + '|' + board[2][1] + '|' + board[2][2]);
}

// Define a function to check if a player has won
function checkWin(player) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] == player && board[i][1] == player && board[i][2] == player) {
      return true;
    }
  }
  // Check columns
  for (let j = 0; j < 3; j++) {
    if (board[0][j] == player && board[1][j] == player && board[2][j] == player) {
      return true;
    }
  }
  // Check diagonals
  if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
    return true;
  }
  if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
    return true;
  }
  // No win found
  return false;
}

// Define a function to play the game
function playGame() {
  // Set initial variables
  let currentPlayer = 'X';
  let moveCount = 0;
  // Display the empty board
  displayBoard();
  // Start the game loop
  while (moveCount < 9) {
    // Ask the current player for their move
    let row = prompt('Enter row (0-2) for ' + currentPlayer + ':');
    let col = prompt('Enter col (0-2) for ' + currentPlayer + ':');
    // Check if the move is valid
    if (board[row][col] == ' ') {
      // Update the board with the move
      board[row][col] = currentPlayer;
      // Increment the move count
      moveCount++;
      // Check if the current player has won
      if (checkWin(currentPlayer)) {
        // Display the board and the winner
        displayBoard();
        console.log(currentPlayer + ' wins!');
        // End the game loop
        return;
      }
      // Switch to the other player
      currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
      // Display the updated board
      displayBoard();
    } else {
      // Move is invalid, ask for a new one
      console.log('Invalid move!');
    }
  }
  // Game ends in a draw
  console.log('Draw!');
}

// Start the game
playGame();
