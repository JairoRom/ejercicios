// ceo = 2200;
// manager = 1800;
// cto = 1800;
// developer = 1500;
// default1 = 1000;
//let role= prompt("¿Qué salario quieres saber?(ceo, manager,cto, developer, otro):")
function calculateSalary(role) {
  switch (role) {
    case "ceo":
      return "2200";
    case "manager":
    case "cto":
      return "1800";
    case "developer":
      return "1500";
    default:
      return "1000"
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);