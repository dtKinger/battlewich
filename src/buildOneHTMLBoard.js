import { cursor } from "sisteransi";
import { player1 } from "./playerCreation";
import { placeWich } from "./Gameboard"
import { renderPlayerWiches } from "./renderBoard";

const sandwichArr = [
  player1.gameboard.submarine,
  player1.gameboard.french,
  player1.gameboard.reuben,
  player1.gameboard.club,
  player1.gameboard.hotDog
]

let currentAxis = player1.gameboard.axis;

export const buildOneHTMLBoard = ( (contextName) => {
  
  const gameArea = document.querySelector('.game')

  gameArea.innerHTML = `
    <div class="gameboard-container">
        <div class="tester-background axis-btn">
          <button class="tester axis-btn axis-btn-padding">Axis</button>
        </div>
      
      <div class="board-context">
        <h3>${contextName}</h3>
        <div class="gameboard gameboard-player ontouchstart="">
        </div>
      </div>


    <div class="sandwich-info">
      <p class="sandwich-label">submarine</p>
      <p class="sandwich-layout"><span class="wich-component">s</span><span class="wich-component">s</span><span class="wich-component">s</span><span class="wich-component">s</span><span class="wich-component">s</span></p>
    </div>

    </div>
  `
  
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
        // axisLabel.textContent = 'Y'
      } else if (currentAxis === 'y'){
        currentAxis = 'x'
        // axisLabel.textContent = 'X'
      }
      axisButton.classList.toggle('axis-btn__y')
    })

    allSquares.forEach((square) => {
      square.addEventListener('mouseover', (e) => {
        square.style.cursor = 'pointer';
        let getDataId = square.getAttribute("data-id")
        let a = parseInt(getDataId[1])
        let b = parseInt(getDataId[3])
        let coords = [a, b];
        if (!player1.gameboard.checkSpaces(sandwichArr[0], coords, currentAxis)){
          square.style.cursor = 'not-allowed'
          square.classList.add('illegal-placement')
        } else if (player1.gameboard.checkSpaces(sandwichArr[0], coords, currentAxis)){
          highlightChecked(sandwichArr[0], coords)
        }
      })
    })

    allSquares.forEach((square) => {
      square.addEventListener('mouseout', (e) => {
        square.style.cursor = ''
        allSquares.forEach((square) => {
          square.classList.remove('illegal-placement', 'legal-placement')
          square.setAttribute('disabled', '');
        })
        
      })
    })

    

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
  const allSquares = document.querySelectorAll('.square')
  allSquares.forEach((square) => {
    square.addEventListener('click', (e) => {
      
      let a = parseInt(e.target.getAttribute('data-id').charAt(1)) // [4, 2] => 4
      let b = parseInt(e.target.getAttribute('data-id').charAt(3)) // [4, 2] => 2
      if (e.target.textContent === '' && !e.target.classList.contains('illegal-placement')){
        // I like shift() here... makes a queue to cycle through sandwiches. Feels clean.
        // if (){ // Put a guard clause for disabled hovers.
          player1.gameboard.placeWich(sandwichArr.shift(), [a,b], currentAxis)
          renderPlayerWiches()
        // }
        // document.querySelector('.sandwich-label').textContent = shift.name
        // document.querySelector('.sandwich-layout').innerHTML = getWichLayout()
      
      }
    })
  })

}

// function getWichLayout () {
//   let wichLayout = '';
//   for (let i = 0; i < sandwichArr[0].length; i += 1){
//     wichLayout += `<span class="wich-component">${sandwichArr[0].name.charAt(0)}</span>`;
//   }
//   return wichLayout;
// }

// function getSandwichName () {
//   let copyArr = [];
//   for (let i = 0; i < sandwichArr.length; i += 1){
//     copyArr.push(sandwichArr[i])
//   }
//   console.log(copyArr[0].name)
//   console.log(sandwichArr[0].name)
//   return copyArr.shift().name;
// }