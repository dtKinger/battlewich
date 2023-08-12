import { player1, computer } from "./index";
const attackBtn = document.querySelector('.attack-btn');
const attackRow = document.querySelector('#row-coords');
const attackCol = document.querySelector('#col-coords');


attackBtn.addEventListener('click', (e) => {
  const targetBoard = computer.gameboard
  targetBoard.receiveAttack([attackRow.value, attackCol.value]);
  
  console.log(`Attacking: [${attackRow.value},${attackCol.value}]`)
  console.log(targetBoard.board)
})

attackBtn.addEventListener('click', () => {
  console.log('additional test')
})