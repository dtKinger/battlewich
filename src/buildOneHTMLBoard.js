import { cursor } from "sisteransi";
import { p1Gameboard, player1 } from "./playerCreation";
import { placeWich } from "./Gameboard"
import { renderPlayerWiches } from "./renderBoard";
import { updateDomMessage } from "./updateDomMessage";

const sandwichArr = [
  player1.gameboard.submarine,
  player1.gameboard.french,
  player1.gameboard.reuben,
  player1.gameboard.club,
  player1.gameboard.hotDog
]

let currentAxis = player1.gameboard.axis;
let lastKnownLoc = [0,0];
let down = false;

export const buildOneHTMLBoard = ( (contextName) => {
  
  const gameArea = document.querySelector('.game')

  gameArea.innerHTML = `
    <div class="gameboard-container">
        
    <div class="axis-area">
      <div class="tester-background axis-btn">
          <button class="tester axis-btn axis-btn-padding original-axis">Axis</button>
          <button class="tester axis-btn-padding alt-axis-btn">Orientation</button>
        </div>
          <p class="subtext">Hold <kbd class="kbd">X</kbd></p>
          <p class="alt-subtext">Horizontal</p>
        </div>
      <div class="board-context">
        <h3>${contextName}</h3>
        <div class="gameboard gameboard-player ontouchstart="">
        </div>
      </div>
  
    </div>
  `
  const subtext = document.querySelector('.subtext')
  const altSubtext = document.querySelector('.alt-subtext')
  const axisButton = document.querySelector('.axis-btn')
  // const axisLabel = document.querySelector('.axis-label')
  const oddClasses = ['square', 'light-wood']
  const evenClasses = ['square', 'dark-wood']
  const playerGameBoard = document.querySelector('.gameboard-player');

  // Generate playerBoard
    for (let row = 0; row < 10; row += 1){
      for (let col = 0; col < 10; col += 1){
        if (row % 2 === 0 && col % 2 === 0){
          const newDiv = document.createElement('div')
          newDiv.classList.add(...oddClasses)
          newDiv.dataset.id = `[${row},${col}]`
          newDiv.setAttribute('disabled', true);
          playerGameBoard.append(newDiv)
        } else if (row % 2 === 0 && col % 2 !== 0){
          const newDiv = document.createElement('div')
          newDiv.classList.add(...evenClasses)
          newDiv.dataset.id = `[${row},${col}]`
          newDiv.setAttribute('disabled', true);
          playerGameBoard.append(newDiv)
        } else if (row % 2 !== 0 && col % 2 !== 0){
          const newDiv = document.createElement('div')
          newDiv.classList.add(...oddClasses)
          newDiv.dataset.id = `[${row},${col}]`
          newDiv.setAttribute('disabled', true);
          playerGameBoard.append(newDiv)
        } else if (row % 2 !== 0 && col % 2 === 0){
          const newDiv = document.createElement('div')
          newDiv.classList.add(...evenClasses)
          newDiv.dataset.id = `[${row},${col}]`
          newDiv.setAttribute('disabled', true);
          playerGameBoard.append(newDiv)
        }
      }
    }
    const allSquares = document.querySelectorAll('.square')

    axisButton.addEventListener('click', (e) => {
      if (currentAxis === 'x'){
        currentAxis = 'y'
        subtext.classList.add('hide')
        altSubtext.textContent = `Vertical` // Mobile concessions
      } else if (currentAxis === 'y'){
        currentAxis = 'x'
        subtext.classList.remove('hide')
        altSubtext.textContent = `Horizontal` // Mobile concessions
      }
      axisButton.classList.toggle('axis-btn__y')
    })

    // Combine keydown and keyup event listener
    window.addEventListener('keydown', handleXKeyDown);
    window.addEventListener('keyup', handleXKeyUp);

    function handleXKeyDown (e) {
      let square = document.querySelector(`[data-id="[${lastKnownLoc[0]},${lastKnownLoc[1]}]"]`);
      
      if (e.key === 'x') {
        if (down) return
        down = true;

        toggleAxis();
        subtext.classList.toggle('hide');
        lowLight(); // un-highlight the hover-highlight for other axis.

        if (!player1.gameboard.checkSpaces(sandwichArr[0], lastKnownLoc, currentAxis)) {
          square.style.cursor = 'not-allowed';
          square.classList.add('illegal-placement');
        } else if (player1.gameboard.checkSpaces(sandwichArr[0], lastKnownLoc, currentAxis)) {
          highlightChecked(sandwichArr[0], lastKnownLoc);
        }
      }
    }

    function handleXKeyUp (e) {
      let square = document.querySelector(`[data-id="[${lastKnownLoc[0]},${lastKnownLoc[1]}]"]`);
      
      if (e.key === 'x') {
        down = false;

        toggleAxis();
        subtext.classList.toggle('hide');
        lowLight(); // un-highlight the hover-highlight for other axis.

        if (!player1.gameboard.checkSpaces(sandwichArr[0], lastKnownLoc, currentAxis)) {
          square.style.cursor = 'not-allowed';
          square.classList.add('illegal-placement');
        } else if (player1.gameboard.checkSpaces(sandwichArr[0], lastKnownLoc, currentAxis)) {
          highlightChecked(sandwichArr[0], lastKnownLoc);
        }
      }
    }

    // On mouseover
    allSquares.forEach((square) => {
      square.addEventListener('mouseover', (e) => {
        square.style.cursor = 'pointer';
        let getDataId = square.getAttribute("data-id")
        let a = parseInt(getDataId[1])
        let b = parseInt(getDataId[3])
        let coords = [a, b];
        lastKnownLoc = [a, b]
        
        if (!player1.gameboard.checkSpaces(sandwichArr[0], coords, currentAxis)){
          square.style.cursor = 'not-allowed'
          square.classList.add('illegal-placement')
        } else if (player1.gameboard.checkSpaces(sandwichArr[0], coords, currentAxis)){
          highlightChecked(sandwichArr[0], coords)
        }
      })
    })

    // On mouseout
    allSquares.forEach((square) => {
      square.addEventListener('mouseout', (e) => {
        square.style.cursor = ''
        allSquares.forEach((square) => {
          square.classList.remove('illegal-placement', 'legal-placement')
          square.setAttribute('disabled', '');
        })
      })
    })

    function lowLight() {
      allSquares.forEach((square) => {
        square.style.cursor = ''
        allSquares.forEach((square) => {
          square.classList.remove('illegal-placement', 'legal-placement')
          square.setAttribute('disabled', '');
        })
      })
    }

    function toggleAxis() {
      if (currentAxis === 'x') {
        currentAxis = 'y';
      } else if (currentAxis === 'y') {
        currentAxis = 'x';
      }
      axisButton.classList.toggle('axis-btn__y');
    }


  // Click event to commit a sandwich on the board.
  function handleSquareClick(e) {
    const startButton = document.querySelector('.start-btn')
    let a = parseInt(e.target.getAttribute('data-id').charAt(1)); // [4, 2] => 4
    let b = parseInt(e.target.getAttribute('data-id').charAt(3)); // [4, 2] => 2
    if (e.target.textContent === '' && !e.target.classList.contains('illegal-placement')) {
      player1.gameboard.placeWich(sandwichArr.shift(), [a, b], currentAxis);
      if (sandwichArr[0]){
        if (sandwichArr[0].name === 'hot dog'){
          updateDomMessage(`Position your ${sandwichArr[0].name.charAt(0).toUpperCase()}${sandwichArr[0].name.slice(1)}. 4 / 5`)  
        } else {
          updateDomMessage(`Position your ${sandwichArr[0].name.charAt(0).toUpperCase()}${sandwichArr[0].name.slice(1)} sandwich. ${5 - sandwichArr.length} / 5`)
        }
      } else {
        updateDomMessage(`You're all set. Hit Start Game!`)
      }
      renderPlayerWiches();
    }
    if (sandwichArr.length === 0) {
      document.querySelector('.start-btn').removeAttribute('disabled')
      document.querySelector('.start-btn').classList.remove('disabled')
      // Remove the click event listener
      allSquares.forEach(square => {
        square.removeEventListener('click', handleSquareClick);
      });
      startButton.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // If holding the x key for hotDog placement
      // Effectively release it.
      if (down) {
        toggleAxis();
        document.querySelector('.original-axis').classList.add('disabled')
        document.querySelector('.original-axis').setAttribute('disabled', "true")
        down = false;
      }
    
      // This should be done on the start button click but while moving it
      // I noticed my code is too tightly coupled.
      turnOffAltKeys(); // disable the placeWich helper function
    }
  }
  
  // Attach the named function as the event handler
  allSquares.forEach(square => {
    square.addEventListener('click', handleSquareClick);
  });
  
  function turnOffAltKeys () {
    window.removeEventListener('keydown', handleXKeyDown);
    window.removeEventListener('keyup', handleXKeyUp);
  }
  
});


function highlightChecked (sandwich, anchorArr, axis = currentAxis) {
  
  let allClear = 0;
  let a = anchorArr[0]
  let b = anchorArr[1]

  if (axis === 'x'){
    for (let i = 0; i < sandwich.length; i += 1){
      if ((b + i) <= 9){
        allClear += 1;
      } if ( allClear === sandwich.length ){
        for (let j = 0; j < sandwich.length; j += 1){
          let newY = b + j
          let neighbor = document.querySelector(`[data-id="[${a},${newY}]"]`);
          neighbor.classList.add('legal-placement')
          neighbor.setAttribute('disabled', 'true');
        }
      }
    }
  } else if (axis === 'y'){
  // do Y things
  for (let i = 0; i < sandwich.length; i += 1){
    if ((a - i) >=0){
      allClear += 1;
      } if ( allClear === sandwich.length ){
        for (let j = 0; j < sandwich.length; j += 1){
          let newX = a - j
          let neighbor = document.querySelector(`[data-id="[${newX},${b}]"]`);
          neighbor.classList.add('legal-placement')
          neighbor.setAttribute('disabled', 'true');
        }
      }
    }
  }
}