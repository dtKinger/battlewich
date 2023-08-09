import { aBoard } from "./index";
const attackBtn = document.querySelector('.attack-btn');
const attackRow = document.querySelector('#row-coords');
const attackCol = document.querySelector('#col-coords');


attackBtn.addEventListener('click', () => {
  console.log(`Attacking: [${attackRow.value},${attackCol.value}]`)
  aBoard.receiveAttack([attackRow.value, attackCol.value]);
})


