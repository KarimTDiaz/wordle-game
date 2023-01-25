import { checkWinner } from "./check-winner.js";
import { wordChosen } from "./word.js";

let rowCounter = 0;

const typeSolution = (word, gameBoard) => {

  for (let index = 0; index < word.length; index++) {
    let letter = word[index]
    let box =  gameBoard.children[rowCounter].children[index]
    box.textContent = letter;
    if(letter === wordChosen[index]){
      box.classList.add('letter-correct')
    } else if(wordChosen.includes(letter)){
      box.classList.add('letter-contains')
    }else{
      box.classList.add('letter-not-included')
    }
    
  }
  rowCounter++
};

export { typeSolution };
export {rowCounter};
