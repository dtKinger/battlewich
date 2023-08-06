export const makeWich = (description, length, anchorArr, axis, biteCount = 0, eatenStatus = false) => {
    
  return {
    description: description,
    length: length,
    anchorArr: anchorArr,
    axis: axis,
    biteCount: biteCount,
    eatenStatus: eatenStatus,

    bite() { // The action of getting hit
      if (this.biteCount < this.length){
        this.biteCount += 1
      }
      return this.biteCount
    },
    
    isEaten() { // Check if it's sunk (call me after hit())
      if (this.biteCount === this.length){
        this.eatenStatus = true;
        return true;
      } else if (this.biteCount < this.length){
        return false;
      }
    },

  }
}


