import { setUpGameLoop } from './gameLoop';
import { updateDomMessage } from './updateDomMessage';
import { player1, computer } from "./playerCreation"
import { buildOneHTMLBoard } from "./buildOneHTMLBoard"

export function boardSetUp (p1Name) {
  console.log(p1Name)
  player1.name = `${p1Name}`
  const mainArea = document.querySelector('.main')
  updateDomMessage(`Welcome ${p1Name}. Place your sandwiches... guard them well!`)
  mainArea.style.justifyContent = 'center'; // Undo styling from Welcome screen.
  console.log(`${player1.name}: ${player1.gameboard.board}`)
  mainArea.innerHTML = `
    <div class="game">

    </div>
    <div><button class="start-btn">Start Game</button></div>
  `

  buildOneHTMLBoard(player1.name);

  const startButton = document.querySelector('.start-btn')
  startButton.classList.add('show-block')
    startButton.addEventListener('click', () => {
      // Prevent multiple loops running for multiple clicks
      // new game? Set P1's turn
      if (player1.active === false && computer.active === false) {
        player1.active = true;
        setUpGameLoop()
      }
    })
  
  console.log(player1.name)
}

