/* Imports */
import './meyer-reset.css'
import './style.css'
import './dom.js'  
import { makeWich } from './wichFactory.js'
import { Gameboard } from './Gameboard' 
// import Icon from './icon.png';  // these don't exist
// import Data from './data.xml';
// import Notes from './data.csv';

/* Memory allocation */
// const pageHeader = document.querySelector('.header')

/* Application */
console.log('Welcome to Battle Sandwich!')
let submarine = makeWich('submarine', 5, [0,0], 'x')
console.log(submarine)
let hotDog = Gameboard().placeHotDog([0,0], 'x')
hotDog.bite()
hotDog.bite()
console.log(hotDog.biteCount)
console.log(hotDog.isEaten())
