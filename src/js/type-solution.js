import { checkWinner } from './check-winner.js';
import { wordChosen } from './word.js';

let rowCounter = 0;

// const typeSolution = (word, gameBoard) => {
//   for (let index = 0; index < word.length; index++) {
//     let letter = word[index];
//     let box = gameBoard.children[rowCounter].children[index];
//     box.textContent = letter;
//     if (letter === wordChosen[index]) {
//       box.classList.add('letter-correct');
//     } else if (wordChosen.includes(letter)) {
//       box.classList.add('letter-contains');
//     } else {
//       box.classList.add('letter-not-included');
//     }
//   }
//   rowCounter++;
// };
const paintLetter = (letter, position, className, gameBoard) => {
  const element = gameBoard.children[rowCounter].children[position];
  element.classList.add(className);
  element.textContent = letter;
};

const typeSolution = (word, gameBoard) => {
  let letter;
  let box;
  let className;
  let wordToChange = wordChosen;
  for (let index = 0; index < word.length; index++) {
    letter = word[index];
    box = gameBoard.children[rowCounter].children[index];

    if (letter === wordChosen[index]) {
      className = 'letter-correct';
      wordToChange = wordToChange.replace(letter, '-');
      paintLetter(letter, index, className, gameBoard);
    }
  }

  for (let index = 0; index < wordToChange.length; index++) {
    letter = word[index];
    box = gameBoard.children[rowCounter].children[index];
    // box.textContent = letter;

    if (wordToChange.includes(letter)) {
      className = 'letter-contains';
      wordToChange = wordToChange.replace(letter, '-');
      console.log(wordToChange);
      paintLetter(letter, index, className, gameBoard);
      // box.textContent = letter;
    }
  }
  rowCounter++;
};

export { typeSolution };
export { rowCounter };
