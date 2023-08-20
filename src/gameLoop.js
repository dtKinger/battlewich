import { Gameboard } from "./Gameboard";
import { player1, computer, p1Gameboard, p1Board, compGameboard, compBoard } from "./playerCreation";
import { renderComputerBoard, updatePlayerBoard, renderGame, renderPlayerWiches  } from "./renderBoard";
import { checkWinner } from "./checkWinner"
import { addListeners } from './gameLoopEvents';
import { buildHTMLBoards } from "./buildHTMLBoards";
import { updateDomMessage } from "./updateDomMessage";
import { compTargeting, populateHitQueue, checkIfHit } from "./compTargeting";


export function setUpGameLoop(gameSpeed) {
  
  const mainArea = document.querySelector('.main')
  mainArea.innerHTML = `
    <div class="game">

    </div>
    <div><button class="start-btn">Start Game</button></div>
  `
  updateDomMessage(`Bite your way around the opponent's board.`)

  // inject HTML boards
  buildHTMLBoards();

  // Let player see their selections
  renderPlayerWiches();
  /* Event listeners */
  addListeners(); // crosshair, orange highlight

  if (player1.active){
    gameLoop(gameSpeed);
  }
  
}

// Game Loop
export async function gameLoop(gameSpeed) {
  
  const compDomBoard = document.querySelector('.gameboard-computer')
  // Base case 1
  if (p1Gameboard.everythingIsEaten || compBoard.everythingIsEaten) {
    // Game over condition, stop the loop
    return;
  }

  if (player1.active) {
    // Human player's turn
    const playerCoordinates = await player1.takeTurn(compGameboard);
    compGameboard.receiveAttack(playerCoordinates);
    renderComputerBoard()
    revealEatenWiches()
    compGameboard.isEverythingConsumed();
    if(checkWinner() === true){
      compDomBoard.setAttribute('disabled', 'true')
      showPlayAgainModal();
      return;
    };
    console.log(`something less unique`)
    
  } else if (computer.active) {
    // Computer's turn
    console.log(`Computer's turn`)

    let newTarget = compTargeting(); // off-load targeting
    
    p1Gameboard.receiveAttack(newTarget);
    let a = parseInt(newTarget[0])
    let b = parseInt(newTarget[1])
    if (checkIfHit(a,b)){
      populateHitQueue(a,b)
    }
    console.log(computer.nextHitQueue)
    
    updatePlayerBoard();
    p1Gameboard.isEverythingConsumed();

    if (checkWinner() === true) {
      showPlayAgainModal();
      return;
    }
  }
  
  // Flip the turn switch
  player1.active = !player1.active;
  computer.active = !computer.active;
  console.log(gameSpeed + 'Right before I need to use it')
  if (gameSpeed === 'suspensful'){
    setTimeout(() => gameLoop(gameSpeed), 2200); // Re-start the game loop
  } else if (gameSpeed === 'turbo'){
    setTimeout(() => gameLoop(gameSpeed), 600); // Re-start the game loop
  } else if (gameSpeed === 'balanced'){ 
    setTimeout(() => gameLoop(gameSpeed), 1200); // Re-start the game loop
  }
};
    
    


function revealEatenWiches () {
  const compDomBoard = document.querySelector('.gameboard-computer')
  const sandwichArr = [
    compGameboard.submarine,
    compGameboard.french,
    compGameboard.reuben,
    compGameboard.club,
    compGameboard.hotDog
  ]

  for (let i = 0; i < sandwichArr.length; i += 1){
    if (sandwichArr[i].isEaten()){
      for (let row = 0; row < 10; row += 1) {
        for (let col = 0; col < 10; col += 1) {
          if (compBoard[row][col] === `${sandwichArr[i].name.charAt(0)}b`){
            let cell = compDomBoard.querySelector(`[data-id="[${row},${col}]"]`) 
            cell.textContent = compBoard[row][col].charAt(0);
          }
        }
      }
    }
  }
}


function showPlayAgainModal () {
  const mainArea = document.querySelector('.main')

  const modalBackground = document.createElement('div');
  modalBackground.classList.add('modal-background')
  const playAgainBtn = document.createElement('div');
  playAgainBtn.classList.add('tester', 'modal-sizing')
  playAgainBtn.textContent = `Play Again > > >`;
  playAgainBtn.addEventListener('click', (e) => {
    location.reload()
    // boardSetUp(player1.name); // This requires a lot of memory dumping
  })
  modalBackground.append(playAgainBtn);
  mainArea.prepend(modalBackground);
}