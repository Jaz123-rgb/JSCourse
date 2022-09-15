//? trabajar con archivos  haciendo uso del file system 

const fs = require('fs');

let crearSerie = (cantidad) => {

return new Promise((resolve, reject) => {

let fibo1 = 1;
let fibo2 = 1;
let serie = '';

//? Serie Fibonaccio

// !son una lista autoicrementble deoende de la cantida de los nuemro 

serie += `${fibo1}`;
 
for(let i = 2; i<=cantidad-1; i++){

    serie += `${fibo2}\t`;
    fibo2 = fibo1 + fibo2;
    fibo1 = fibo2 - fibo1; 


fs.writeFileSync('msgfib.txt', serie, (err) => {
    if(err)
         reject('Error file can create!');
    else
        resolve('The file has been create succesfully')
       
     })
   
    }
  })
 }


module.exports = {
    crearSerie
}