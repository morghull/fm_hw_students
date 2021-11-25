class Student extends User {
  /**
   *
   * @param {string} name
   * @param {string} surname
   * @param {number} year
   */
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  set year(year) {
    const currentYear = new Date().getYear() + 1900;
    if (typeof year !== 'number')
      throw new TypeError('Adoption year must be a number!');
    if (year > currentYear)
      throw new RangeError(
        'Adoption year must be not greater then current year!'
      );
    if (currentYear - year > 5)
      throw new RangeError('Adoption year must be not older than 5 years!');
    this._year = year;
  }
  get year() {
    return this._year;
  }
  getCourse = () => new Date().getYear() + 1900 - this.year;
}
