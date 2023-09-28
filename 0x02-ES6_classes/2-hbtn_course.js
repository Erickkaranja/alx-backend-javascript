import default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === "string" && typeof length === "number") {
          [this._name, this._length] = [name, length];
    }
  }
}
