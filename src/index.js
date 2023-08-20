/* Imports */
import './meyer-reset.css'
import './style.css'
import { Player } from './Player';
import { player1, computer } from "./playerCreation"
import { updateDomMessage } from './updateDomMessage';
import { welcomeScreen } from './welcomeScreen'
import { buildHTMLBoards } from "./buildHTMLBoards"
import { addListeners } from "./gameLoopEvents"


/* Memory allocation */


welcomeScreen()
console.log("Welcome to Battle 'Wich!")
// all After Game Sign-in stage.
// Generate HTML and CSS for two gameboards. Note: Does not render sandwiches

/* Application */


// Game Play stage
// import { gameLoop } from './gameLoop';