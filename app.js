/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let secretNum, guessList, isWinner;


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById('message');
const guessesEl = document.getElementById('prevGuesses');
const guessBtn = document.getElementById('guessButton');
const resetBtn = document.getElementById('resetButton');
const guessInput = document.getElementById('guessInput');


/*----------------------------- Event Listeners -----------------------------*/
resetBtn.addEventListener('click', function() {
  init();
});

guessBtn.addEventListener('click', function() {
  if (guessList.length === 0) {
    guessesEl.innerText = 'Previous Guesses:'
  }
  if (isWinner === false) {
    checkGuess(parseInt(guessInput.value));
  }
})


/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  messageEl.className = '';
  guessesEl.innerText = '';
  messageEl.innerText = 'Please enter a number between 1 and 100'
  guessInput.value = '';
  guessList = [];
  isWinner = false;
  secretNum = Math.floor(Math.random()*5) + 1;
  render();
}
function checkGuess (guess) {
  guessInput.value = '';
  if (isNaN(guess)){
    messageEl.innerText = 'Whoops! Please enter a number - try again';
  } else if(guess < 1 || guess > 100) {
    messageEl.innerText = 'Whoops! Please try a number between 1 and 100.';
  } else if (guess === secretNum) {
    messageEl.className = 'winner';
    isWinner = true;
    guessList.push(guess)
    if (guessList.length === 0) {
      messageEl.innerText = `WOW, LOOK AT THAT! You found the number in ${guessList.length} guess!`
    } else {
      messageEl.innerText = `Congratulations! You found the number in ${guessList.length} guesses!`
    }
  } else if (guess <= secretNum) {
    messageEl.className = 'low';
    messageEl.innerText = `${guess} is too low, please try again!`
    guessList.push(guess);
  } else {
    messageEl.className = 'high';
    messageEl.innerText = `${guess} is too high, please try again!`
    guessList.push(guess);
  }
  render(guess);
}

function render(guess) {
  if (guess > secretNum) {
    let div = document.createElement("div");
    div.innerText = guess;
    div.className = "high";
    guessesEl.appendChild(div);
  } else if (guess < secretNum) {
    let div = document.createElement("div");
    div.innerText = guess;
    div.className = "low";
    guessesEl.appendChild(div);
  } else if (guess === secretNum) {
    let div = document.createElement("div");
    div.innerText = guess;
    div.className = "winner";
    guessesEl.appendChild(div);
  }
}

// const game = {
//     title: 'Guess the Number!',
//     biggestNum: 10,
//     smallestNum: 1,
//     secretNum: null,
//     play: function() {
//       this.secretNum = Math.floor(Math.random() * 
//         (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//         document.getElementById("answer").innerHTML = this.secretNum;
//       //   do {
//       //     this.prevGuesses.push((this.getGuess()))
//       //     document.getElementById("guessInput").innerHTML = this.prevGuesses;
//       // } while (this.getGuess() != this.secretNum);
//      },
//     prevGuesses: [],
//     getGuess: function() {
//       let currentGuess = '';
//       while (currentGuess != 'quit'){
//         currentGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} or "quit" to exit:`)
//           if (currentGuess <= this.biggestNum && currentGuess >= this.smallestNum){
//             return currentGuess
//           } else if (!isNaN(parseInt(currentGuess))){
//             alert(`Please enter a number within range`)
//           } else {
//             alert('Please enter a number - try again');
//           }
//       }
//     }
//   }

// console.log(game.smallestNum)
// game.getGuess()
// game.play()
