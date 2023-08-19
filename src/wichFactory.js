import { updateDomMessage } from "./updateDomMessage"

export const makeWich = (name, length, biteCount = 0, eatenStatus = false) => {
    
  return {
    name,
    length,
    biteCount,
    eatenStatus,

    bite() { // The action of getting hit
      if (this.biteCount < this.length){
        this.biteCount += 1
        this.playSound();
      }
      return this.biteCount
    },
    
    isEaten() { // Check if it's sunk (call me after hit())
      const sandwichName = this.name
      if (this.biteCount === this.length){
        this.eatenStatus = true;
        updateDomMessage(`The ${sandwichName.charAt(0).toUpperCase()}${sandwichName.slice(1)} has been entirely consumed!`)
      } 
      return this.eatenStatus;
    },

    playSound() {
      const audio = document.querySelector('#sound-bite');
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
    },

  }
}


