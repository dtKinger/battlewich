import { buildHTMLBoards } from './buildHTMLBoards';
import { player1, computer, p1Gameboard, compGameboard } from './playerCreation';
import { renderPlayerWiches } from './renderBoard';
import { addListeners } from './gameLoopEvents';
import { mainArea } from './welcomeScreen';
import { gameLoop } from './gameLoop';

export function boardSetUp (p1Name) {

  mainArea.innerHTML = `
  <div class="game">

  </div>
  <div><button class="start-btn">Start Game</button></div>
`

  const startButton = document.querySelector('.start-btn')
  startButton.classList.add('show-block')

  buildHTMLBoards();

  // Game Set up Stage.
  p1Gameboard.placeWich(p1Gameboard.submarine, [8,8], 'y')
  p1Gameboard.placeWich(p1Gameboard.french, [1,0])  
  p1Gameboard.placeWich(p1Gameboard.reuben, [5,5], 'y')
  p1Gameboard.placeWich(p1Gameboard.club, [3,0])
  p1Gameboard.placeWich(p1Gameboard.hotDog, [7,2], 'y')

  compGameboard.placeWich(compGameboard.submarine, [0,0])
  compGameboard.placeWich(compGameboard.french, [1,0])
  compGameboard.placeWich(compGameboard.reuben, [2,0])
  compGameboard.placeWich(compGameboard.club, [3,0])
  compGameboard.placeWich(compGameboard.hotDog, [4,0])
  renderPlayerWiches();

  /* Event listeners */
  addListeners(); // crosshair, orange highlight

  startButton.addEventListener('click', () => {
    // Prevent multiple loops running for multiple clicks
    // new game? Set P1's turn
    if (player1.active === false && computer.active === false) {
      player1.active = true;
      gameLoop()
    }
  })
}