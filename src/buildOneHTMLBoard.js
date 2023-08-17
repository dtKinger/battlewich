import { cursor } from "sisteransi";
import { player1 } from "./playerCreation";

export const buildOneHTMLBoard = ( (contextName) => {
  
  const gameArea = document.querySelector('.game')
  
  gameArea.innerHTML = `
    <div class="gameboard-container">
      <div class="tester-background axis-btn">
        <button class="tester axis-btn">Axis</button>
      </div>
      <p class="axis-label">X</p>
      <div class="board-context">
        <h3>${contextName}</h3>
        <div class="gameboard gameboard-player">
        </div>
      </div>
    </div>
  `
  
  const axisButton = document.querySelector('.axis-btn')
  const axisLabel = document.querySelector('.axis-label')
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
      if (player1.gameboard.axis === 'x'){
        player1.gameboard.axis = 'y'
        axisLabel.textContent = 'Y'
      } else if (player1.gameboard.axis === 'y'){
        player1.gameboard.axis = 'x'
        axisLabel.textContent = 'X'
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
        console.log(coords)
        if (!player1.gameboard.checkSpaces(player1.gameboard.submarine, coords, player1.gameboard.axis)){
          // square.classList.add('illegal-placement')
          console.log(`Can't put a wich there.`)
          square.style.cursor = 'not-allowed'
          square.classList.add('illegal-placement')
        } else if (player1.gameboard.checkSpaces(player1.gameboard.submarine, coords, player1.gameboard.axis)){
          square.classList.add('legal-placement')
        }
      })
    })

    allSquares.forEach((square) => {
      square.addEventListener('mouseout', (e) => {
        square.style.cursor = ''
        square.classList.remove('illegal-placement', 'legal-placement')
      })
    })

});