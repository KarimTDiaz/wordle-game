// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createGameBoard } from './game-board.js';
import { typeSolution } from './type-solution.js';
import { chooseWord, wordChosen } from './word.js';
import { checkWinner } from './check-winner.js';
import { formElement } from './constans.js';
import { resetElement } from './constans.js';
import { rowCounter } from './type-solution.js';



const gameBoardElement = document.getElementById('game-board');

createGameBoard(gameBoardElement);
chooseWord()


formElement.addEventListener('submit', ev => {
  ev.preventDefault();
  const wordCreated = ev.target.word.value;
  if(wordCreated.length === 5){
    typeSolution(wordCreated, gameBoardElement);
  }

  checkWinner(wordCreated, wordChosen)
  console.log(wordChosen)

  ev.target.reset()
});

resetElement.addEventListener('click' , (ev) =>{
  gameBoardElement.innerHTML = '';
  console.log(rowCounter)
  chooseWord()
  createGameBoard(gameBoardElement)
  

})


