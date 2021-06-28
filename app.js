const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    },
    prevGuesses: [],
    getGuess: function() {
      let currentGuess = '';
      while (currentGuess != 'quit'){
        currentGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} or "quit" to exit:`)
        if (currentGuess != 'quit'){
          if (currentGuess <= this.biggestNum && currentGuess >= this.smallestNum){
            this.prevGuesses.push(currentGuess)
          } else if (!isNaN(parseInt(currentGuess))){
            alert(`Please enter a number within range`)
          } else if (currentGuess != 'quit'){
            alert('Please enter a number - try again');
          }
        }
      }
    }
  }

  game.getGuess()
// console.log(game.smallestNum)

