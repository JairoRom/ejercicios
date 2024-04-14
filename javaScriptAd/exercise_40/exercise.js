async function getData() {
  //async determina que es asincrona.
  const data = await fetch("https://jsonplaceholder.typicode.com/todos"); //con await espera la información y la recibe ("handshake").

  const parseData = await data.json();

  const filterData=parseData.filter((item) => {
    return !item.completed;
  });
  console.log(filterData);
}

getData();
