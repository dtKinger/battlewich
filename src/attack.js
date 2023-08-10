import { playerBoard, computerBoard } from "./index";
const attackBtn = document.querySelector('.attack-btn');
const attackRow = document.querySelector('#row-coords');
const attackCol = document.querySelector('#col-coords');


attackBtn.addEventListener('click', () => {
  const targetBoard = computerBoard
  console.log(`Attacking: [${attackRow.value},${attackCol.value}]`)
  targetBoard.receiveAttack([attackRow.value, attackCol.value]);
  console.log(targetBoard.board)
})


