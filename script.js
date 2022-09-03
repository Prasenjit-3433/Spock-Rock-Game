const playerScoreElement = document.getElementById('playerScore');
const playerChoiceElement = document.getElementById('playerChoice');
const computerScoreElement = document.getElementById('computerScore');
const computerChoiceElement = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

// Player's Move Icons
const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

// Computer's Move Icon
const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {icon.classList.remove('selected')});
}

// Reset scores & playerChoice/computerChoice
function resetAll() {
  playerScoreElement.textContent = 0;
  playerScoreNumber = 0;
  playerChoiceElement.textContent = '';
  computerScoreElement.textContent = 0;
  computerScoreNumber = 0;
  computerChoiceElement.textContent = '';
  computerChoice = '';
  resultText.textContent = '';
  resetSelected();
}

// Random Computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  }else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper';
  }else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors';
  }else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  }else {
    computerChoice = 'spock';
  }
  
}

// Add 'selected' styling & computerChoice
function displayComputerChoice() {
  switch(computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceElement.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceElement.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceElement.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceElement.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceElement.textContent = ' --- Spock';
      break; 
    default:
      break; 
  }
}

// Check results, increase scores, update resultText
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!";
  }else {
    const choice = choices[playerChoice]['defeats'];
    if (choice.includes(computerChoice)) {
      resultText.textContent = 'You Won!';
      playerScoreNumber++;
      playerScoreElement.textContent = playerScoreNumber;
    }else {
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScoreElement.textContent = computerScoreNumber;
    }
  }
}

// Call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Add 'selected' class for styling & playerChoice
  switch(playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceElement.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceElement.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceElement.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceElement.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceElement.textContent = ' --- Spock';
      break; 
    default:
      break; 
  }
  
}

// On Load 
resetAll();