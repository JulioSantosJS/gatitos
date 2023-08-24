console.log("EJERCICIO C")

let c=1;
let cantGatos = 6;
let cantPasos = 4;
let p = " 🐾";
while (c<cantPasos){
    pasos = pasos + " 🐾";
    c = c + 1;
}
c = 1;
while(c<=cantGatos){
    if(c % 2 == 0){
        console.log("Gato #"+ c +" 🐈 🐈"+p);
        c = c + 1;
    }else{
        console.log("Gato #"+ c +" 🐈"+p);
        c = c + 1;
    }
    
}