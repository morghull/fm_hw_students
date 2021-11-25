class Group {
  /**
   *
   * @param {string} name
   * @param {Student[]} students
   */
  constructor(name, students) {
    this.name = name;
    this.students = students;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string!');
    this._name = name;
  }
  get students() {
    return this._students;
  }
  set students(students) {
    if (!(students instanceof Array))
      throw new TypeError('Students must be an Array!');
    if (students.filter((s) => s instanceof Student).length === 0)
      throw new TypeError('Students array must contain at least one Student!');
    this._students = [].push(...students.filter((s) => s instanceof Student));
  }
}
