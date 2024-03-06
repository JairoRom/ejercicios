class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(valueFirst) {
    this._firstName = valueFirst;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(valueLast) {
    this._lastName = valueLast;
  }

  get age() {
    return this._age;
  }

  set age(valueAge) {
    this._age = valueAge;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);

console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';

console.log(person.fullName);
