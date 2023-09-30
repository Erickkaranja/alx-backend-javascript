export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number' && typeof location === 'string') {
      [this._size, this._location] = [size, location];
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
