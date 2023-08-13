export const buildHTMLBoards = ( () => {
  
  const oddClasses = ['square', 'light-wood']
  const evenClasses = ['square', 'dark-wood']
  const template2DArr = [
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','','']
  ]  
  const playerGameBoard = document.querySelector('.gameboard-player');
  const computerGameBoard = document.querySelector('.gameboard-computer');
  // Generate playerBoard
    for (let row = 0; row < template2DArr.length; row += 1){
      for (let col = 0; col < template2DArr.length; col += 1){
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

  // Generate compBoard
  for (let row = 0; row < template2DArr.length; row += 1){
    for (let col = 0; col < template2DArr.length; col += 1){
      if (row % 2 === 0 && col % 2 === 0){
        const newDiv = document.createElement('div')
        newDiv.classList.add(...oddClasses)
        newDiv.dataset.id = `[${row},${col}]`
        computerGameBoard.append(newDiv)
      } else if (row % 2 === 0 && col % 2 !== 0){
        const newDiv = document.createElement('div')
        newDiv.classList.add(...evenClasses)
        newDiv.dataset.id = `[${row},${col}]`
        computerGameBoard.append(newDiv)
      } else if (row % 2 !== 0 && col % 2 !== 0){
        const newDiv = document.createElement('div')
        newDiv.classList.add(...oddClasses)
        newDiv.dataset.id = `[${row},${col}]`
        computerGameBoard.append(newDiv)
      } else if (row % 2 !== 0 && col % 2 === 0){
        const newDiv = document.createElement('div')
        newDiv.classList.add(...evenClasses)
        newDiv.dataset.id = `[${row},${col}]`
        computerGameBoard.append(newDiv)
      }
    }
  }
});