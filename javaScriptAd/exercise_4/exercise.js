
function sumUntil(maxValue) {
  let operation=0;
  for(let i=0;i<=maxValue;i++){
    operation+=i;
  }
  return operation;
}

console.log(sumUntil(5));