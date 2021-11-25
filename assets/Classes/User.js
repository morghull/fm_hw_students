class User {
  /**
   *
   * @param {string} name
   * @param {string} surname
   */
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string!');
    this._name = name;
  }
  get surname() {
    return this._surname;
  }
  set surname(surname) {
    if (typeof surname !== 'string')
      throw new TypeError('Surame must be a string!');
    this._surname = surname;
  }
  setFullName = (name, surname) => {
    this.name = name;
    this.surname = surname;
  };
  getFullName = () => {
    return `${this.name} ${this.surname}`;
  };
}
