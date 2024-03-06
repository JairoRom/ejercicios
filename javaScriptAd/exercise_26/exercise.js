// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }
function sum(...numbers) {
    let resultado=0;
    for (let index = 0; index < numbers.length; index++) {
        resultado +=numbers[index];
    }
    return resultado;
    
}

// function sum(...numbers) {
//     return numbers.reduce((acc,num)=>acc+num,0)
// }

console.log(sum(1, 2, 3, 4, 5));