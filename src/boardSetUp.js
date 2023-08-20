import { setUpGameLoop } from './gameLoop';
import { updateDomMessage } from './updateDomMessage';
import { player1, computer, compGameboard } from "./playerCreation"
import { buildOneHTMLBoard } from "./buildOneHTMLBoard"

export function boardSetUp (p1Name, gameSpeed) {
  
  player1.name = `${p1Name}`
  player1.gameboard.name = `${p1Name}`
  const mainArea = document.querySelector('.main')
  updateDomMessage(`Welcome ${p1Name}. Position your Submarine... sandwich. 0 / 5`)
  mainArea.style.justifyContent = 'center'; // Undo styling from Welcome screen.
  document.querySelector('.loading-bumper').remove() // just to center hamburger layout briefly.
  mainArea.innerHTML = `
    <div class="game">

    </div>

    <div class="start-btn-background">
      <button class="start-btn disabled" disabled>Start Game &gt; &gt; &gt;</button>
    </div>
  `

  buildOneHTMLBoard(player1.name);
  // scroll is helpful on mobile view
  document.querySelector('.h1').scrollIntoView({ behavior: 'smooth', block: 'start' });
  placeFiveCompWiches();

  const startButton = document.querySelector('.start-btn')
  startButton.classList.add('show-block')
  startButton.addEventListener('click', (e) => {
    // Prevent multiple loops running for multiple clicks
    // new game? Set P1's turn
    if (player1.active === false && computer.active === false) {
      player1.active = true;
      setUpGameLoop(gameSpeed)
    }
  })
  
  function placeFiveCompWiches() {
    const sandwichArr = [
      compGameboard.submarine,
      compGameboard.french,
      compGameboard.reuben,
      compGameboard.club,
      compGameboard.hotDog
    ]

    for (let i = 0; i < sandwichArr.length; i += 1){
      let attempts = 0;
      const maxAttempts = 20;
      
      while (attempts < maxAttempts){
        let coords = generateOneCoordSet()
        try{
          attempts += 1;
          if(compGameboard.checkSpaces(sandwichArr[i], coords.coordinates, coords.axis) === true){
            compGameboard.placeWich(sandwichArr[i], coords.coordinates, coords.axis)
            break;
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  function generateOneCoordSet () {
  
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    let c = Math.floor(Math.random() * 10);
    if (c < 5){ // Coin flip tails to orient computer sandwich.
      c = 'x'
    } else if (c >= 5){
      c = 'y'
    }
    const axis = c;
    const coordinates = [a,b]; // row, col, axis
    return {coordinates, axis};  
  }
}