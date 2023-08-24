console.log("EJERCICIO B")

let contador = 1;
let cantDeGatos = 4;
let cantDePasos = 5;
let pasos = " 🐾";
while (contador<cantDePasos){
    pasos = pasos + " 🐾";
    contador = contador + 1;
}
contador = 1;
while(contador<=cantDeGatos){
    console.log("Gato #"+ contador +" 🐈"+pasos);
    contador = contador + 1;
}