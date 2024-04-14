const isLogged = true;
const logged = (log) => {
  return new Promise((resolve, reject) => {
    if (log === true) {
      //if logged return random num
      resolve(Math.random());
    } else {
      //not return error
      reject(new Error("not logged"));
    }
  });
};
const promise = (num) => {
  return new Promise((resolve, reject) => {
    //if high return data
    if (num > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
        //not return error
      reject(new Error("Num not correct"));
    }
  });
};

logged(isLogged)
  .then((response) => promise(response))
  .then((resultado) => console.log(resultado))
  .catch((err) => console.error(err))
  .finally(()=>console.log("Finished"))
