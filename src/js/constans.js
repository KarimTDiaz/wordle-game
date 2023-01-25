const ALL_WORDS = [
    'alaba',
    'bollo',
    'canal',
    'dados',
    'estar',
    'farol',
    'gatos',
    'index',
    'jaula',
    'labio',
    'moral',
    'nacer',
    'oasis',
    'piano',
    'queja',
    'rampa',
    'salta',
    'trama',
    'uvula',
    'valla',
    'yermo',
    'zorro'
  ];

  const ALL_WORDS_ADVANCED_MODE = [
    'chorizo',
    'juzgado',
    'azulejo',
    'hazañas',
    'rechazo',
    'lechuza',
    'lechuga',
    'cabezal',
    'campaña',
    'fluidez',
    'mezclar',
    'riqueza',
    'avanzas',
    'clavija',
    'ahijada'
  ]
  
  export { ALL_WORDS, ALL_WORDS_ADVANCED_MODE };
 

  export const formElement = document.getElementById('user-word-form');
  export const resetElement = document.getElementById('reset-button');
  export const gameBoardElement = document.getElementById('game-board');
  export const popupElement = document.getElementById('popup');
  export const advancedModeElement = document.getElementById('advanced-button')