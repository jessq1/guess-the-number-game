/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let isWinner = false;


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById('message');
const guessesEl = document.getElementById('prevGuesses');
const guessBtn = document.getElementById('guessButton');
const resetBtn = document.getElementById('resetButton');
const guessInput = document.getElementById('guessInput');

/*-------------------------------- Objects --------------------------------*/

const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    guess: parseInt(guessInput.value),
    play: function(guess) {
      if (this.prevGuesses.length === 0) {
        guessesEl.innerText = 'Previous Guesses:'
      }
      if (isWinner === false) {
        game.getGuess(guess);
      }
      this.render(guess);
     },
    init: function(){
      messageEl.className = '';
      guessesEl.innerText = '';
      messageEl.innerText = `Please enter a number between ${this.smallestNum} and ${this.biggestNum}.`
      guessInput.value = '';
      isWinner = false;
      this.prevGuesses = [];
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum 
      this.render();
      //answer check:
      document.getElementById("answer").innerHTML = this.secretNum;
    },
    getGuess: function(guess) {
      guessInput.value = '';
      if (isNaN(guess)){
        messageEl.innerText = 'Whoops! Please enter a number - try again';
      } else if(guess < this.smallestNum || guess > this.biggestNum) {
        messageEl.innerText = `Whoops! Please try a number between ${this.smallestNum} and ${this.biggestNum}.`;
      } else if (guess === this.secretNum) {
        messageEl.className = 'winner';
        isWinner = true;
        this.prevGuesses.push(guess)
        if (this.prevGuesses.length === 0) {
          messageEl.innerText = `WOW, LOOK AT THAT! You found the number in ${this.prevGuesses.length} guess!`
        } else {
          messageEl.innerText = `Congratulations! You found the number in ${this.prevGuesses.length} guesses!`
        }
      } else if (guess <= this.secretNum) {
        messageEl.className = 'low';
        messageEl.innerText = `${guess} is too low, please try again!`
        this.prevGuesses.push(guess);
      } else {
        messageEl.className = 'high';
        messageEl.innerText = `${guess} is too high, please try again!`
        this.prevGuesses.push(guess);
      }
    },
    render: function(guess){
      if (guess > this.secretNum) {
        let div = document.createElement("div");
        div.innerText = guess;
        div.className = "high";
        guessesEl.appendChild(div);
      } else if (guess < this.secretNum) {
        let div = document.createElement("div");
        div.innerText = guess;
        div.className = "low";
        guessesEl.appendChild(div);
      } else if (guess === this.secretNum) {
        let div = document.createElement("div");
        div.innerText = guess;
        div.className = "winner";
        guessesEl.appendChild(div);
      }
    }
  }


/*----------------------------- Event Listeners -----------------------------*/
resetBtn.addEventListener('click', function() {
  game.init();
});

// guessBtn.addEventListener('click', game.play())

guessBtn.addEventListener('click', function() {
  if (game.prevGuesses.length === 0) {
    guessesEl.innerText = 'Previous Guesses:'
  }
  if (isWinner === false) {
    game.play(parseInt(guessInput.value));
  }
})


/*-------------------------------- Functions --------------------------------*/
game.init();

// function init() {
//   messageEl.className = '';
//   guessesEl.innerText = '';
//   messageEl.innerText = 'Please enter a number between 1 and 100'
//   guessInput.value = '';
//   guessList = [];
//   isWinner = false;
//   secretNum = Math.floor(Math.random()*5) + 1;
//   render();
// }
// function checkGuess (guess) {
//   guessInput.value = '';
//   if (isNaN(guess)){
//     messageEl.innerText = 'Whoops! Please enter a number - try again';
//   } else if(guess < 1 || guess > 100) {
//     messageEl.innerText = 'Whoops! Please try a number between 1 and 100.';
//   } else if (guess === secretNum) {
//     messageEl.className = 'winner';
//     isWinner = true;
//     guessList.push(guess)
//     if (guessList.length === 0) {
//       messageEl.innerText = `WOW, LOOK AT THAT! You found the number in ${guessList.length} guess!`
//     } else {
//       messageEl.innerText = `Congratulations! You found the number in ${guessList.length} guesses!`
//     }
//   } else if (guess <= secretNum) {
//     messageEl.className = 'low';
//     messageEl.innerText = `${guess} is too low, please try again!`
//     guessList.push(guess);
//   } else {
//     messageEl.className = 'high';
//     messageEl.innerText = `${guess} is too high, please try again!`
//     guessList.push(guess);
//   }
//   render(guess);
// }

// function render(guess) {
//   if (guess > secretNum) {
//     let div = document.createElement("div");
//     div.innerText = guess;
//     div.className = "high";
//     guessesEl.appendChild(div);
//   } else if (guess < secretNum) {
//     let div = document.createElement("div");
//     div.innerText = guess;
//     div.className = "low";
//     guessesEl.appendChild(div);
//   } else if (guess === secretNum) {
//     let div = document.createElement("div");
//     div.innerText = guess;
//     div.className = "winner";
//     guessesEl.appendChild(div);
//   }
// }


// console.log(game.smallestNum)
// game.getGuess()
// game.play()
