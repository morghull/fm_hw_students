'use strict';
console.group('testing User');
{
  try {
    const user = new User(1, 'Ivanov');
  } catch (e) {
    console.error(e.message);
  }

  try {
    const user = new User('Andrey', null);
  } catch (e) {
    console.error(e.message);
  }

  const user = new User('Tetiana', 'Ivanova');
  console.log(user);
  console.log(user.getFullName());
  user.setFullName(user.name, 'Kravchenko');
  console.log(`${user.name} %c${user.surname}`, 'color:green');
}
console.groupEnd();

console.group('testing Student');
{
  try {
    const student = new Student('Dmitrii', 'Vasiliev');
  } catch (e) {
    console.error(e.message);
  }
  try {
    const student = new Student('Dmitrii', 'Vasiliev', 1);
  } catch (e) {
    console.error(e.message);
  }
  try {
    const student = new Student('Dmitrii', 'Vasiliev', 2030);
  } catch (e) {
    console.error(e.message);
  }

  const student = new Student('Dmitrii', 'Vasiliev', 2016);
  console.log(student);
  console.log('course number is : ', student.getCourse());
}
console.groupEnd();

console.group('testing Group');
{
  try {
    const user = new Group(1, []);
  } catch (e) {
    console.error(e.message);
  }
  try {
    const user = new Group('Lightforce', [1, 2]);
  } catch (e) {
    console.error(e.message);
  }

  const student1 = new Student('Tirion', 'Fordring', 2018);
  const student2 = new Student('Daraion', 'Mograine', 2018);
  const student3 = new Student('Uther', 'Lightbringer', 2017);
  const group = new Group('Lightforce', [student1, student2, student3, 1, 3]);
  console.log(group.showStudents());
}
console.groupEnd();
