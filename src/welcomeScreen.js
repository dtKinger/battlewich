import { updateDomMessage } from "./updateDomMessage";
import { boardSetUp } from "./boardSetUp"


const mainArea = document.querySelector('.main')
const getName = document.querySelector('.tester')
const input = document.querySelector('#p1-name')
const form = document.querySelector('form')
let welcomeTimeoutID;
const speedSelect = document.querySelector('#speed')
let gameSpeed;
document.querySelector('.loading-bumper').scrollIntoView({ behavior: 'smooth', block: 'start' });

mainArea.style.justifyContent = 'flex-start';

getName.addEventListener('click', (e) => {
  e.preventDefault();
  if (form.checkValidity()){
    const newPlayer = input.value
    clearTimeout(welcomeTimeoutID);
    gameSpeed = getSpeed()
    boardSetUp(newPlayer, gameSpeed)
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

function getSpeed () {
  return speedSelect.options[speedSelect.selectedIndex].value;
}