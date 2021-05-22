// OOP

// 4 Pillars of OOP
// Inheritance
// Abstraction
// Encapsulation
// Polymorphism

const listArr = [1,2,3]; // array literal

const listObj = {
  '0': 1,
  '1': 2,
  '2': 3,
  length: 3
}; // object literal

console.log('list arr: ', listArr);
console.log('list obj: ', listObj);

function Student(name, surname, grade) {
  this.name = name;
  this.surname = surname;
  this.grade = grade;
}

function hasPassedGreaterThan7() {
  console.log('web: ', this.grade);

  return this.grade >= 7;
}

Student.prototype.fullName =  function() {
  return this.name + ' ' + this.surname;
}

Student.prototype.hasPassedStandard = function() {
  console.log('standard: ', this.grade);

  return this.grade >= 5;
}

// If applied, this commit will...

const studentWeb = new Student('John', 'Doe', 10);
studentWeb.hasPassedStandard = hasPassedGreaterThan7;
const studentPython = new Student('Snake', 'Eyes', 6);

console.log('web passed: ', studentWeb.hasPassedStandard());
console.log('python passed: ', studentPython.hasPassedStandard());


