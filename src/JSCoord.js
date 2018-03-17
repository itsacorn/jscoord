class JSCoord {
	/**
   * @param {Number[]} coordinates
   */
	constructor (coordinates) {
		let x = coordinates[0] || 0, y = coordinates[1] || 0, z = coordinates[2] || 0
		/**
		 * !! Do NOT directly modify this variable. You should only ever read from it. !!
     * @type {Number}
     */
		this.x = x
		/**
		 * !! Do NOT directly modify this variable. You should only ever read from it. !!
     * @type {Number}
     */
		this.y = y
		/**
		 * !! Do NOT directly modify this variable. You should only ever read from it. !!
     * @type {Number}
     */
		this.z = z
		/**
		 * The one variable you should modify. It can store any arbitrary data.
		 */
		this.data = new Proxy({}, {
			set (o, p, v) {
				return o[p] = v
			},
			get (o, p) {
				return o[p]
			}
		})
	}
	/**
   * Increase X by amount.
   * @param {Number} amount
   */
	incrX (amount = 1) {
		if (this.map && this.map.x && (this.x + amount > this.map.x || this.x + amount < 0 - this.map.x)) { throw new Error("New amount exceeds maximum map size.") } else {
			this.x += amount
			return this
		}
	}
	/**
   * Decrease X by amount.
   * @param {Number} amount
   */
	decrX (amount = 1) {
		if (this.map && this.map.x && (this.x - amount > this.map.x || this.x - amount < 0 - this.map.x)) { throw new Error("New amount does not exceed minimum map size.") } else {
			this.x -= amount
			return this
		}
	}
	/**
   * Increase Y by amount.
   * @param {Number} amount
   */
	incrY (amount = 1) {
		if (this.map && this.map.y && (this.y + amount > this.map.y || this.y + amount < 0 - this.map.y)) { throw new Error("New amount exceeds maximum map size.") } else {
			this.y += amount
			return this
		}
	}
	/**
   * Decrease Y by amount.
   * @param {Number} amount
   */
	decrY (amount = 1) {
		if (this.map && this.map.y && (this.y - amount > this.map.y || this.y - amount < 0 - this.map.y)) { throw new Error("New amount does not exceed minimum map size.") } else {
			this.y -= amount
			return this
		}
	}
	/**
   * Increase Z by amount.
   * @param {Number} amount
   */
	incrZ (amount = 1) {
		if (this.map && this.map.z && (this.z + amount > this.map.z || this.z + amount < 0 - this.map.z)) { throw new Error("New amount exceeds maximum map size.") } else {
			this.z += amount
			return this
		}
	}
	/**
   * Decrease Z by amount.
   * @param {Number} amount
   */
	decrZ (amount = 1) {
		if (this.map && this.map.z && (this.z - amount > this.map.z || this.z - amount < 0 - this.map.z)) { throw new Error("New amount does not exceed minimum map size.") } else {
			this.z -= amount
			return this
		}
	}
	/**
   * Invert X axis value.
   */
	invX () {
		this.x = 0 - this.x
		return this
	}
	/**
   * Invert Y axis value.
   */
	invY () {
		this.y = 0 - this.y
		return this
	}
	/**
   * Invert Z axis value.
   */
	invZ () {
		this.z = 0 - this.z
		return this
	}
	/**
	 * Invert all axies.
	 */
	inv () {
		this["x", "y", "z"] = [0 - this.x, 0 - this.y, 0 - this.z]
		return this
	}
	/**
	 * Increase all axies by amount.
	 * @param {Number} amount
	 */
	incr (amount = 1) {
		this["x", "y", "z"] = [this.x += 1, this.y += 1, this.z += 1]
		return this
	}
	/**
	 * Decrease all axies by amount.
	 * @param {Number} amount
	 */
	decr (amount = 1) {
		this["x", "y", "z"] = [this.x -= 1, this.y -= 1, this.z -= 1]
		return this
	}
	/**
	 * Invert all axies.
	 */
	inv () {
		this["x", "y", "z"] = [0 - this.x, 0 - this.y, 0 - this.z]
		return this
	}
	get array () {
		return [this.x, this.y, this.z]
	}
	get JSON () {
		return {
			x: this.x,
			y: this.y,
			z: this.z,
		}
	}
	/**
   *
   * @param {Number[]} size
   */
	setMap (...size) {
		let x = size[0][0] || size[0], y = size[0][1] || size[1] || size[0][0] || size[0], z = size[0][2] || size[2]
		/**
     * @type {Number[]}
     */
		if (this.x > x || this.x < 0 - x || this.y > y || this.y < 0 - y || this.z > z || this.z < 0 - z) { throw new Error("Can not set map size as one or more coordinates exceed new map size.") } else {
			this.map = { x, y, z }
			return this
		}
	}
	/**
   * Get Map as Array.
   */
	get mapArray () {
		return [this.map.x, this.map.y, this.map.z]
	}
	/**
   * Get Map as Object.
   */
	get mapJSON () {
		return this.map
	}
	/**
   * Set X to provided value.
   * @param {Number} val
   */
	setX (val) {
		if (this.map && this.map.x && (val > this.map.x || val < 0 - this.map.x)) { throw new Error("New value does not fit in Map range.") } else {
			this.x = val
			return this
		}
	}
	/**
   * Set Y to provided value.
   * @param {Number} val
   */
	setY (val) {
		if (this.map && this.map.y && (val > this.map.y || val < 0 - this.map.y)) { throw new Error("New value does not fit in Map range.") } else {
			this.y = val
			return this
		}
	}
	/**
   * Set Z to provided value.
   * @param {Number} val
   */
	setZ (val) {
		if (this.map && this.map.z && (val > this.map.z || val < 0 - this.map.z)) { throw new Error("New value does not fit in Map range.") } else {
			this.z = val
			return this
		}
	}
  /**
   * Resets x, y, z to 0.
   */
  reset () {
    this.x = 0
    this.y = 0
    this.z = 0
    return this
  }
  /**
   * Get value difference of 2 coordinate sets.
   * @param {Number[]} coordinates
   */
  rlt (...coordinates) {
		let x = coordinates[0][0] || coordinates[0], y = coordinates[0][1] || coordinates[1] || coordinates[0][0] || coordinates[0], z = coordinates[0][2] || coordinates[2]
    this.relativitySet = { x, y, z }
    return this
  }
  /**
   * Get the calculated relativity as an object.
   */
  get rltJSON () {
    return { x: this.x - this.relativitySet.x, y: this.y - this.relativitySet.y, z: this.z - this.relativitySet.z }
  }
  /**
   * Get the calculated relativity as an array.
   */
  get rltArray () {
    return [this.x - this.relativitySet.x, this.y - this.relativitySet.y, this.z - this.relativitySet.z]
	}
	/**
	 * 
	 * @param {String} set
	 * Get the angle of 2 coordinate set values. 
	 */
	getRltAngle (set) {
		if (set.toLowerCase() == "xy" || set.toLowerCase() == "yx") {
			return Math.atan(this.y - this.relativitySet.y / this.x - this.relativitySet.x) * 180 / Math.PI
		}
		if (set.toLowerCase() == "yz" || set.toLowerCase() == "zy") {
			return Math.atan(this.z - this.relativitySet.z / this.y - this.relativitySet.y) * 180 / Math.PI
		}
		if (set.toLowerCase() == "zx" || set.toLowerCase() == "xz") {
			return Math.atan(this.x - this.relativitySet.x / this.z - this.relativitySet.z) * 180 / Math.PI
		}
		return undefined
	}
}

module.exports = JSCoord
