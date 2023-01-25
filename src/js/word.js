import { ALL_WORDS } from "./constans.js";

let wordChosen;

const chooseWord = () => {
    wordChosen = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)]

}

export {chooseWord}
export {wordChosen}