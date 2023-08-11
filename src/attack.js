import { player, computer } from "./Player";
const attackBtn = document.querySelector('.attack-btn');
const attackRow = document.querySelector('#row-coords');
const attackCol = document.querySelector('#col-coords');


attackBtn.addEventListener('click', () => {
  const targetBoard = computer.board
  console.log(`Attacking: [${attackRow.value},${attackCol.value}]`)
  targetBoard.receiveAttack([attackRow.value, attackCol.value]);
  console.log(targetBoard)
})


