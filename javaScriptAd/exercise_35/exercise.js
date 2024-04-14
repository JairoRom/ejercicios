function repeatHello(callback) {
    setInterval(callback,1000);   
}
let helloCallback=()=>{
    console.log("Hello");
};
repeatHello(helloCallback);
