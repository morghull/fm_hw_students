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
    if (
      students.length > 0 &&
      students.filter((s) => s instanceof Student).length === 0
    )
      throw new TypeError('Students array must contain at least one Student!');
    this._students = [...students.filter((s) => s instanceof Student)];
  }
  showStudents() {
    return this._students
      .map((s) => `${s.surname} ${s.name[0].toUpperCase()}.`)
      .join(', ');
  }
}
