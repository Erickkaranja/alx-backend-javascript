export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }

    this._code = code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
