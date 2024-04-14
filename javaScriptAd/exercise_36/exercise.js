function repeatHello(callback) {
    const id = setInterval(callback, 1000);
  
    setTimeout(() => {
      clearInterval(id);
      console.log("5 seconds");
    }, 5000);
  }
  
  const helloCallback = () => {
    console.log("Hello");
  };
  
  repeatHello(helloCallback);
  
