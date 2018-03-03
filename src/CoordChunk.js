const JSCoord = require("./JSCoord")
class CoordChunk {
  /** 
   * Create a new Coordinate Chunk.
   * @param {Number[]} boundaries
   * @param {Number} maxLength
  */
  constructor (maxLength = Infinity) {
    this.limit = maxLength
    this.sets = []
  }
  /**
   * Add a Set to the Chunk.
   * @param {Number[]|JSCoord} coords
   */
  addSet (coords) {
    if (
      (this.sets.findIndex(t => { return t.x == coords.x && t.y == coords.y && t.z == coords.z }) > -1) ||
      (this.limit < this.sets.length + 1)
    ) {
      throw new Error("Invaild coordinates or maximum Chunk size reached.")
      return
    } else {
      if (coords instanceof JSCoord) {
        this.sets.push(coords)
      } else {
        this.sets.push(new JSCoord(coords))
      }
      return this
    }
  }
  /**
   * Get a Set from the Chunk.
   * @param {Number[]} coords 
   * @returns {JSCoord}
   */
  getSet (coords) {
    let item = this.sets.find(t => { return t.x == coords[0] && t.y == coords[1] && t.z == coords[2] })
    if (item) {
      return item
    } else {
      throw new Error("Set not found in Chunk.")
      return
    }
  }
  /**
   * Delete a Set from the Chunk.
   * @param {Number[]|JSCoord} coords 
   * @returns {JSCoord}
   */
  delSet (coords) {
    var index
    if (coords instanceof JSCoord) {
      var index = this.sets.findIndex(t => {
        return (
          t.x == coords.x &&
          t.y == coords.y &&
          t.z == coords.z
        )
      })
    } else {
      var index = this.sets.findIndex(t => {
        return (
          t.x == coords[0] &&
          t.y == coords[1] &&
          t.z == coords[2]
        )
      })
    }
    if (index > -1) {
      this.sets.splice(index, 1)
      return this
    } else {
      throw new Error("Set not found in Chunk.")
      return
    }
  }
}

module.exports = CoordChunk