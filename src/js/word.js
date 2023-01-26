import { ALL_WORDS, ALL_WORDS_ADVANCED_MODE } from './constans.js';

let wordChosen;
let advancedMode = false;

const chooseWord = () => {
  if (advancedMode) {
    return ALL_WORDS_ADVANCED_MODE[
      Math.floor(Math.random() * ALL_WORDS_ADVANCED_MODE.length)
    ];
  } else {
    return ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];
  }
};

const changeMode = () => {
  advancedMode = !advancedMode;
};

export { chooseWord, wordChosen, changeMode };
