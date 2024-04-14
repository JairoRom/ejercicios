const number = 15;

let numPromise=new Promise((resolve,reject)=>{
    if (number >10){
        resolve("Number is greater than 10");
    } else{
        reject("Number isn't greater than 10")
    }
})

numPromise
    .then((num)=>console.log(num))
    .catch((err)=>console.error(err))