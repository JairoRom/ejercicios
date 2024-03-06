let helloName=""
function printName(helloName) {
    helloName="Hello John";
    function inner() {
        return helloName; 
    }
    return inner;
}
console.log(printName()());
