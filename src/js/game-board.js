
// const rootStyles = document.documentElement.style;
let wordLength = 5;
let wordContainers = 5;

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

export { createGameBoard };
export {wordLength}
export {wordContainers}