let helloName="";
function printName(helloName) {
    helloName="Hello John";
    function inner() {
        setTimeout(()=>{
            console.log(helloName);
        },1000)
    }
    return inner;
}

printName()();
