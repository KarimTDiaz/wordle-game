import { wordLength } from "./game-board.js"
import { rowCounter } from "./type-solution.js";
import { wordContainers } from "./game-board.js";
import { formElement } from "./constans.js";
import { resetElement } from './constans.js';

const popupElement = document.getElementById('popup')


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
        formElement.children[0].setAttribute('disabled', true)
        const timeOutId = setTimeout(() =>{
            popupElement.classList.remove('popup--show')
            formElement.children[0].removeAttribute('disabled')
            resetElement.classList.add('button--reset-show')
            clearTimeout(timeOutId)
        }, 4000)
    }
    
    popupElement.append(newWindow)
}

export {checkWinner}