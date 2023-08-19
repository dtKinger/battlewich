import { setUpGameLoop } from './gameLoop';
import { updateDomMessage } from './updateDomMessage';
import { player1, computer, compGameboard } from "./playerCreation"
import { buildOneHTMLBoard } from "./buildOneHTMLBoard"

export function boardSetUp (p1Name) {
  
  player1.name = `${p1Name}`
  player1.gameboard.name = `${p1Name}`
  const mainArea = document.querySelector('.main')
  updateDomMessage(`Welcome ${p1Name}. Position your Submarine... sandwich. 0 / 5`)
  mainArea.style.justifyContent = 'center'; // Undo styling from Welcome screen.
  
  mainArea.innerHTML = `
    <div class="game">

    </div>

    <div class="start-btn-background">
      <button class="start-btn disabled" disabled>Start Game &gt; &gt; &gt;</button>
    </div>
  `

  buildOneHTMLBoard(player1.name);
  placeFiveCompWiches();

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
  
  function placeFiveCompWiches() {
    const sandwichArr = [
      compGameboard.submarine,
      compGameboard.french,
      compGameboard.reuben,
      compGameboard.club,
      compGameboard.hotDog
    ]

    let attempts = 0;
    const maxAttempts = 20;
    
    while (attempts < maxAttempts){
      let coords = generateOneCoordSet()
      try{
        attempts += 1;
        if(compGameboard.checkSpaces(sandwichArr[0], coords) === true){
          compGameboard.placeWich(sandwichArr[0], coords)
          return;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  function generateOneCoordSet () {
  
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    // let thisAxis = 'y'
    const coordinates = [a,b];
    return coordinates;
     
  }
}


  //   // Controlled-random:
  //   const compLayouts = {
  //     "layoutOne": [[1,1,'x'],[7,1,'y'],[9,6,'x'],[6,5,'y'],[3,7,'y']],
  //     "layoutTwo": [[],[],[],[],[]],
  //     "layoutThree": [[],[],[],[],[]],
  //     "layoutFour": [[],[],[],[],[]],
  //     "layoutFive": [[],[],[],[],[]],
  //     "layoutSix": [[],[],[],[],[]],
  //     "layoutSeven": [[],[],[],[],[]],
  //     "layoutEight": [[],[],[],[],[]],
  //     "layoutNine": [[],[],[],[],[]],
  //     "layoutTen": [[],[],[],[],[]],
  //   }

  // // Get a random compLayouts Key
  // const keys = Object.keys(compLayouts)
  // const pickRandom = Math.floor(Math.random() * 10); // returns integer
  // console.log(pickRandom)


  
  // computer.gameboard.placeWich(computer.gameboard.submarine, compLayouts.layoutOne[0])
  // computer.gameboard.placeWich(computer.gameboard.french, compLayouts.layoutOne[1])
  // computer.gameboard.placeWich(computer.gameboard.reuben, compLayouts.layoutOne[2])
  // computer.gameboard.placeWich(computer.gameboard.club, compLayouts.layoutOne[3])
  // computer.gameboard.placeWich(computer.gameboard.hotDog, compLayouts.layoutOne[4])
  