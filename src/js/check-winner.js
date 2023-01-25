import { wordLength } from "./game-board.js"
import { rowCounter } from "./game-board.js";
import { wordContainers } from "./game-board.js";
import { formElement } from "./constans.js";
import { resetElement } from './constans.js';
import { popupElement } from "./constans.js";

const checkWinner = (wordCreated, wordChosen) => {
    popupElement.innerHTML= '';
    const newWindow = document.createElement('p')

    if(wordCreated === wordChosen){
        newWindow.textContent = `Has acertado, la palabra era ${wordChosen.toUpperCase()}. FELICIDADES`
        popupElement.classList.add('popup--show')
        resetElement.classList.add('button--reset-show')
        formElement.children[0].setAttribute('disabled', true)

    } else if(wordCreated.length !== wordLength) {
        newWindow.textContent = `La palabra debe tener 5 letras`
        popupElement.classList.add('popup--show')
        const timeOutId = setTimeout(() =>{
            popupElement.classList.remove('popup--show')
            clearTimeout(timeOutId)
        }, 1000)

    } else if(rowCounter === wordContainers){
        newWindow.textContent = `Has fallado, la palabra correcta era ${wordChosen.toUpperCase()}`
        popupElement.classList.add('popup--show')
        resetElement.classList.add('button--reset-show')
        formElement.children[0].setAttribute('disabled', true)
    }
    
    popupElement.append(newWindow)
}

export {checkWinner}
export {popupElement}