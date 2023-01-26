// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createGameBoard, reset /* , advancedWords */ } from './game-board.js';
import { checkLetter } from './type-solution.js';
import { chooseWord, wordChosen, changeMode } from './word.js';
import { checkWinner } from './check-winner.js';
import {
  formElement,
  resetElement,
  gameBoardElement,
  advancedModeElement
} from './constans.js';

chooseWord();
/* advancedWords() */
createGameBoard(gameBoardElement);

formElement.addEventListener('submit', ev => {
  ev.preventDefault();
  const wordCreated = ev.target.word.value;
  if (wordCreated.length === 5) {
    checkLetter(wordCreated, gameBoardElement);
  }
  checkWinner(wordCreated, wordChosen);
  ev.target.reset();
});

resetElement.addEventListener('click', ev => {
  reset();
});
advancedModeElement.addEventListener('click', ev => {
  reset();
  changeMode();
});
