import { setUpGameLoop } from './gameLoop';
import { updateDomMessage } from './updateDomMessage';
import { player1, computer } from "./playerCreation"


export function boardSetUp (p1Name) {
  console.log(p1Name)
  player1.name = `${p1Name}`
  const mainArea = document.querySelector('.main')
  updateDomMessage(`Welcome ${p1Name} Place your sandwiches... guard them well!`)

  // Sign-in stage
  // Other code to have a Player create a username

  mainArea.innerHTML = `
    <div class="game">

    </div>
    <div><button class="start-btn">Start Game</button></div>
  `

  // Game Set up Stage.
  // p1Gameboard.placeWich(p1Gameboard.submarine, [8,8], 'y')
  // p1Gameboard.placeWich(p1Gameboard.french, [1,0])  
  // p1Gameboard.placeWich(p1Gameboard.reuben, [5,5], 'y')
  // p1Gameboard.placeWich(p1Gameboard.club, [3,0])
  // p1Gameboard.placeWich(p1Gameboard.hotDog, [7,2], 'y')

  // compGameboard.placeWich(compGameboard.submarine, [0,0])
  // compGameboard.placeWich(compGameboard.french, [1,0])
  // compGameboard.placeWich(compGameboard.reuben, [2,0])
  // compGameboard.placeWich(compGameboard.club, [3,0])
  // compGameboard.placeWich(compGameboard.hotDog, [4,0])
  



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

