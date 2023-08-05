export const makeWich = (description, length, anchorArr, axis, biteCount = 0, eatenStatus = false) => {
    
  return {
    description: description,
    length: length,
    anchorArr: anchorArr,
    axis: axis,
    biteCount: biteCount,
    eatenStatus: eatenStatus,

    bite () { // The action of getting hit
      if (this.biteCount < this.length){
        this.biteCount += 1
      }
      return this.biteCount
    },
    
    isEaten(message) { // Check if it's sunk (call me after hit())
      message = "You ate the opponents entire submarine!"
      if (this.biteCount === this.length){
        this.eatenStatus = true;
      }
      console.log(message)
    },

  }
}


