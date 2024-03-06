const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName="Simon";

//Al copiar la referencia del objeto (person2=person1),
//tambien se cambia la memoria de person1 al modificar person2,
//es decir, al realizar un cambio en el objeto de la variable person2,
//también se refleja en la otra variable.

console.log(person1);
console.log(person2);
