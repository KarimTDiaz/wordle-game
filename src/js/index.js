// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createGameBoard } from './game-board.js';
import { typeSolution } from './type-solution.js';

const formElement = document.getElementById('user-word-form');
export const gameBoardElement = document.getElementById('game-board');

createGameBoard(gameBoardElement);

formElement.addEventListener('submit', ev => {
  ev.preventDefault();
  typeSolution(ev.target.word.value, gameBoardElement);
});
