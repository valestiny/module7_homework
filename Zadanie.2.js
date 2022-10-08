function showProps (obj, objKeyName) {
  return (objKeyName in obj);
}
const student = {
  Name: 'Valeria',
  Surname: 'Milentieva',
  ownSity: 'Novosibirsk',
  Age: '23',
}
console.log(showProps(student, "Course")); // false
console.log(showProps(student, "Name")); // true
