import { ALL_WORDS } from './words.js';

const typeSolution = (word, gameBoardElement) => {
  if (word.length !== 5) return;
  for (let index = 0; index < word.length; index++) {
    gameBoardElement.children[0].children[index].texContent = word[index];
  }
};

export { typeSolution };
