const game = {
    title: 'Guess the Number',
    biggestNum: 100,
};
game.smallestNum = 1;
game.numGuesses = 0;

// const catalog = {
//     "001A": $5,
//     "001B": $10,
//     "001C": $500,
// }

// let sku = '';
// while (sku !== 'quit'){
//     sku = prompt('Enter SKU or "quit" to exit :');
//     if (sku in catalog){
//         let price = catalog[sku];
//         alert(`The price of ${sku} is ${price}`);
//     } else if (sku !== 'quit'){
//         alert('invalid SKU - try again')
//     }
// }

// const geniuses = {
//     Einstein: true,
//     Newton: true,
//     Snooki: false
//   };

//   delete geniuses.Snooki;
//   console.log(geniuses)

// for (let key in game) {
//     console.log(`The value of the ${key} property is ${game[key]}`);
//   }

//   game.play = function() {
//     this.secretNum = Math.floor(Math.random() * 
//       (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
//       console.log(this.secretNum)
//     }
//     console.log(game);
//     game.play()


const name = prompt('Enter your name: ');
const age = prompt('Enter your age: ');
const person = {name, age};
console.log(person)
