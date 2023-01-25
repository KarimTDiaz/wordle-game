import { gameBoardElement } from './constans.js';
import { wordChosen } from './word.js';
import { rowCounter, incrementRowCounter} from './game-board.js';


const paintLetter = (letter, position, className) => {
  const element = gameBoardElement.children[rowCounter].children[position];
  if(element.classList.contains('letter-correct')) return;
  element.classList.add(className);
  element.textContent = letter;
};

const checkLetter = (word) => {
  let letter;
  let className;
  let wordToChange = wordChosen;
  for (let index = 0; index < word.length; index++) {
    letter = word[index];
    if (letter === wordChosen[index]) {
      className = 'letter-correct';
      wordToChange = wordToChange.replace(letter, '-');
      paintLetter(letter, index, className);
    }
  }

  for (let index = 0; index < wordToChange.length; index++) {
    letter = word[index];
    if (wordToChange.includes(letter)) {
      className = 'letter-contains';
      wordToChange = wordToChange.replace(letter, '-');
     
      paintLetter(letter, index, className);
      // box.textContent = letter;
    } else{
      className = 'letter-not-included'
      paintLetter(letter, index, className);
    }
  }
  incrementRowCounter()
};

export { checkLetter };

