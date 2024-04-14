function printAsyncName(callback,name) {
   let id =setInterval(function () {
    callback();
   },1000);
   setTimeout(function(){
    clearInterval(id);
    console.log(name);
   },2000);
}
function functionCallback() {
    console.log("Hello");
    
}
printAsyncName(functionCallback,"Nombre");

