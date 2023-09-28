export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string' && typeof code === 'string') {
      [this._name, this._code] = [name, code];
    }
  }
  toString() {
    return this._code;
  }
}
