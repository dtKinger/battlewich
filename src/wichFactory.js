export const makeWich = (description, length, anchorArr, axis, hitCount = 0, sunkStatus = false) => {
    
  return {
    description: description,
    length: length,
    anchorArr: anchorArr,
    axis: axis,
    hitCount: hitCount,
    sunkStatus: sunkStatus,

    hit () { // The action of getting hit
      if (this.hitCount < this.length){
        this.hitCount += 1
      }
      return this.hitCount
    },
    
    isSunk(message) { // Check if it's sunk (call me after hit())
      message = "You ate the opponents entire submarine!"
      if (hitCount === length){
        sunkStatus = true;
      }
      console.log(message)
    },

  }
}


