const fs= require('fs');

const texto="Insertar texto aquí"

fs.writeFile("fx.txt",texto, (error)=>{
    if(error){
        console.error(error);
        return;
    } else{
        console.log("Correcto");
        fs.readFile("fx.txt",{encoding:"utf-8"}, function(error, data){
            if(error){
                console.error(error);
                return;
            }
            console.log(data);
        });
    }
});