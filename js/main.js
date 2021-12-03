//Number guessing game
const secretNum = Math.floor(Math.random() * 100) + 1;
const gameTitle = document.getElementById('game-title');
let input = document.getElementById('input');
const inputBtn = document.getElementById('input-btn');
const outputTxt = document.getElementById('output-txt');
const description = document.getElementById('description');
description.innerHTML = `A simple guessing game. Computer selects a random number between 1 and 100, and you try guessing until you get it correct.`;

inputBtn.addEventListener('click', getInput);

input.addEventListener('keyup', function (event) {
  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
    event.preventDefault();
    document.getElementById('input-btn').click();
  }
});

gameTitle.innerHTML = 'Hello and welcome to the number guessing game!';

function getInput() {
  let guess = parseInt(input.value);
  if (guess === secretNum) {
    outputTxt.innerHTML = `Wow! You guessed correctly. ${guess} is the secret number. Way to go!`;
  } else if (guess > secretNum) {
    outputTxt.innerHTML = `Nice try. I'm afraid ${guess} is too high. Try again.`;
    input.value = '';
  } else
    outputTxt.innerHTML = `Nice try. I'm afraid ${guess} is too low. Try again.`;
  input.value = '';
}
