let players=["Joe","Caroline","Sabrina"]
function luckyD(player) {
    return new Promise((resolve,reject)=>{
        const win=Boolean(Math.round(Math.random()));
        process.nextTick(()=>{
            if(win){
                resolve(`${player} won the draw`);
            } else {
                reject(new Error(`${player} lost the draw`))};
        });
    });    
}

function results(params){
    players.forEach(async (player)=>{
        try{
            await luckyD(player)
            .then(res=>console.log(res))
        } catch(err){
            console.log(err);
        }
        
    });
}
results()
