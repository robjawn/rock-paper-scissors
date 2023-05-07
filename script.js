// Function to generate the computer's choice
function getComputerChoice() {
  // Generate a random integer between 0 and 2
  const choiceIndex = Math.floor(Math.random() * 3);
  
  // Return the corresponding choice
  if (choiceIndex === 0) {
    return 'Rock';
  } else if (choiceIndex === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Makes the player's selection case-insensitive
  playerSelection = playerSelection.toLowerCase();
  // Calls random choice as argument
  computerSelection = getComputerChoice();
  // Define the winning conditions
  const winningConditions = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
  };
  
  // Determine the winner
  if (playerSelection === computerSelection.toLowerCase()) {
    return `It's a tie! You both chose ${computerSelection}.`;
  } else if (winningConditions[playerSelection] === computerSelection.toLowerCase()) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Initialize game
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Play 5 rounds
  for(let i=0; i<5; i++) {
    let playerSelection = prompt('Please Enter Your Choice (Rock, Paper, Scissors)')

    // Logs result to console 
    let roundResult = playRound(playerSelection, getComputerChoice());
    console.log(roundResult);

    //Update scores
    if (roundResult.includes("win")) {
      playerScore ++;
    } else if (roundResult.includes("lose")) {
      computerScore++;
    }
  }
   // Determine the winner of the game
   let gameResult;
   if (playerScore > computerScore) {
     gameResult = "You win the game!";
   } else if (playerScore < computerScore) {
     gameResult = "You lose the game!";
   } else {
     gameResult = "It's a tie!";
   }
 
   // Log the final scores and the winner of the game to the console
   console.log(`Final scores - You: ${playerScore}, Computer: ${computerScore}`);
   console.log(gameResult);
 }

