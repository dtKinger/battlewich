export const domStatusMessage = document.querySelector('.game-status')

export function updateDomMessage (message) {
  if (domStatusMessage){
  domStatusMessage.classList.remove('game-status__reveal')
  }
  domStatusMessage.textContent = `${message}`;
  domStatusMessage.classList.add('game-status__animate'); // Add the animation class
  setTimeout(() => {
    domStatusMessage.classList.remove('game-status__animate'); // Remove the animation class after the animation plays
  }, 1500); // Adjust the delay as needed
}