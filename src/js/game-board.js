import { gameBoardElement, popupElement, formElement } from "./constans";
import { chooseWord, wordChosen } from "./word";

let wordLength = 5
let wordContainers = 5
let rowCounter = 0;


const advancedWords = () => {
  let advancedWordschosen = wordChosen
  wordLength = advancedWordschosen.length
  let advancedTries = wordChosen
  wordContainers = advancedTries.length
  console.log(wordLength)
}
const createGameBoard = gameBoardElement => {
  const gameFragment = document.createDocumentFragment();

  for (let index = 0; index < wordContainers; index++) {
    const createBoxContainers = document.createElement('div');
    createBoxContainers.classList.add('game-board__container');
    gameFragment.append(createBoxContainers);

    for (let index = 0; index < wordLength; index++) {
      const createBox = document.createElement('div');
      createBox.classList.add('game-board__item');
      createBoxContainers.append(createBox);
    }
  }
  gameBoardElement.append(gameFragment);
};

const incrementRowCounter = () => rowCounter++;
const resetRowCounter = () => rowCounter = 0;

const reset = () =>{
  resetRowCounter()
  gameBoardElement.innerHTML = ''
  createGameBoard(gameBoardElement)
  advancedWords()
  chooseWord()
  const timeOutId = setTimeout(() =>{
    popupElement.classList.remove('popup--show')
    formElement.children[0].removeAttribute('disabled')
    clearTimeout(timeOutId)
}, 300)
}

export { createGameBoard , wordLength, wordContainers, rowCounter, incrementRowCounter, resetRowCounter ,reset/* ,advancedWords */};
