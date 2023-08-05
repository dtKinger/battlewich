export function myTest (num) {
  return num;
}

export const dom = ( () => {
  const allSquares = document.querySelectorAll('.square');
  const oddRowSquares = document.querySelectorAll('.odd-row')
  const evenRowSquares = document.querySelectorAll('.even-row')
  
  

  let colorOddRows = ( () => {
  oddRowSquares.forEach( (square) => {
    if (square.dataset.id )
      if (square.dataset.id % 2 !== 0){
        square.classList.add('light-wood')
      } else {
        square.classList.add('dark-wood');
      }
    })
  })()

  evenRowSquares.forEach( (square) => {
    if (square.dataset.id )
      if (square.dataset.id % 2 === 0){
        square.classList.add('light-wood')
      } else {
        square.classList.add('dark-wood');
      }
    })

  }
)();

