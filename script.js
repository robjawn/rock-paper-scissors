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