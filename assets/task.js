'use strict';
console.group('testing User');
{
  try {
    const user = new User(1, 'Ivanov');
  } catch (e) {
    console.log(e.message);
  }

  try {
    const user = new User('Andrey', null);
  } catch (e) {
    console.log(e.message);
  }

  const user = new User('Tetiana', 'Ivanova');
  console.log(user);
  console.log(user.getFullName());
  user.setFullName(user.name, 'Kravchenko');
  console.log(user.getFullName());
}
console.groupEnd();

console.group('testing Student');
{
  try {
    const student = new Student('Dmitrii', 'Vasiliev');
  } catch (e) {
    console.log(e.message);
  }
  try {
    const student = new Student('Dmitrii', 'Vasiliev', 1);
  } catch (e) {
    console.log(e.message);
  }
  try {
    const student = new Student('Dmitrii', 'Vasiliev', 2030);
  } catch (e) {
    console.log(e.message);
  }

  const student = new Student('Dmitrii', 'Vasiliev', 2016);
  console.log(student);
  console.log('course number is : ', student.getCourse());
}
console.groupEnd();

console.group('testing Group');
{
  try {
    const user = new User(1, 'Ivanov');
  } catch (e) {
    console.log(e.message);
  }
}
console.groupEnd();
