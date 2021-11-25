class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  set name(name) {
    this._name = name;
  }
  set surname(surname) {
    this._surname = surname;
  }
}
