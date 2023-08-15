import { updateDomMessage } from "./updateDomMessage";
import { boardSetUp } from "./boardSetUp";

export const mainArea = document.querySelector('.main')
const getName = document.querySelector('.tester')
const input = document.querySelector('#p1-name')
const form = document.querySelector('form')

// export const newPlayer = 
getName.addEventListener('click', (e) => {
  e.preventDefault();
  if (form.checkValidity()){
    const newPlayer = input.value
    boardSetUp(newPlayer)
  } else {
    form.reportValidity()
  }
})

export async function welcomeScreen() {
  updateDomMessage(`Welcome to Battle 'Wich! It's like Battleship... but tastier!`)
  setTimeout(() => {
    updateDomMessage(`Please tell us your name to begin`);
  }, 4000);
  
  
}