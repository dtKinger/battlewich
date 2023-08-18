import { setUpGameLoop } from './gameLoop';
import { updateDomMessage } from './updateDomMessage';
import { player1, computer } from "./playerCreation"
import { buildOneHTMLBoard } from "./buildOneHTMLBoard"

export function boardSetUp (p1Name) {
  
  player1.name = `${p1Name}`
  player1.gameboard.name = `${p1Name}`
  const mainArea = document.querySelector('.main')
  updateDomMessage(`Welcome ${p1Name}. Place your sandwiches... guard them well!`)
  mainArea.style.justifyContent = 'center'; // Undo styling from Welcome screen.
  
  mainArea.innerHTML = `
    <div class="game">

    </div>

    <div class="start-btn-background">
      <button class="start-btn disabled" disabled>Start Game &gt; &gt; &gt;</button>
    </div>
  `

  buildOneHTMLBoard(player1.name);
  generateComputerPlacements()

  const startButton = document.querySelector('.start-btn')
  startButton.classList.add('show-block')
  startButton.addEventListener('click', (e) => {
    // Prevent multiple loops running for multiple clicks
    // new game? Set P1's turn
    if (player1.active === false && computer.active === false) {
      player1.active = true;
      setUpGameLoop()
    }
  })
  
  function generateComputerPlacements() {  
    // Controlled-random:
    const compLayouts = {
      "layoutOne": [[1,1,'x'],[7,1,'y'],[9,6,'x'],[6,5,'y'],[3,7,'y']],
      "layoutTwo": [[],[],[],[],[]],
      "layoutThree": [[],[],[],[],[]],
      "layoutFour": [[],[],[],[],[]],
      "layoutFive": [[],[],[],[],[]],
      "layoutSix": [[],[],[],[],[]],
      "layoutSeven": [[],[],[],[],[]],
      "layoutEight": [[],[],[],[],[]],
      "layoutNine": [[],[],[],[],[]],
      "layoutTen": [[],[],[],[],[]],
    }


  
  computer.gameboard.placeWich(computer.gameboard.submarine, compLayouts.layoutOne[0])
  computer.gameboard.placeWich(computer.gameboard.french, compLayouts.layoutOne[1])
  computer.gameboard.placeWich(computer.gameboard.reuben, compLayouts.layoutOne[2])
  computer.gameboard.placeWich(computer.gameboard.club, compLayouts.layoutOne[3])
  computer.gameboard.placeWich(computer.gameboard.hotDog, compLayouts.layoutOne[4])
  }

}

