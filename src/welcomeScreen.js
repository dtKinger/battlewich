import { updateDomMessage } from "./updateDomMessage";
import { boardSetUp } from "./boardSetUp"


const mainArea = document.querySelector('.main')
const getName = document.querySelector('.tester')
const input = document.querySelector('#p1-name')
const form = document.querySelector('form')
let welcomeTimeoutID;

mainArea.style.justifyContent = 'flex-start';

getName.addEventListener('click', (e) => {
  e.preventDefault();
  if (form.checkValidity()){
    const newPlayer = input.value
    clearTimeout(welcomeTimeoutID);
    boardSetUp(newPlayer)
  } else {
    form.reportValidity()
  }
})

export function welcomeScreen() {
  updateDomMessage(`Welcome to Battle 'Wich. It's like Battleship... but tastier!`)
  welcomeTimeoutID = setTimeout(() => {
    updateDomMessage(`Enter your name to begin.`);
  }, 3000);
}