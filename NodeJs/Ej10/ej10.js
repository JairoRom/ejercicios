    
function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
async function getResults() {
   
    const players=["Tina","Jorge","Julien"];

    players.forEach(async(player)=>{
            
        const resultado= await luckyDraw(player);
        console.log(resultado);
    });
}
getResults();
