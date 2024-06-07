const person = {
  id: 1,
  name: 'Mario',
  surname: 'Rossi',
  old: 25
};

const { id, firstname:name, lastname:surname, age:old } = person;
console.log(person);