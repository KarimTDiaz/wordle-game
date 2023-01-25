import { ALL_WORDS, ALL_WORDS_ADVANCED_MODE } from "./constans.js";


let wordChosen;
let advancedMode = false

const chooseWord = () => {
    if(advancedMode){
       wordChosen = ALL_WORDS_ADVANCED_MODE[Math.floor(Math.random() * ALL_WORDS_ADVANCED_MODE.length)]
    }else{
        wordChosen = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)]
    }
        
        console.log(wordChosen)
}
console.log(advancedMode)


const changeMode = () =>{
    advancedMode = !advancedMode
    console.log(advancedMode)
} 

export {chooseWord, wordChosen,changeMode}
