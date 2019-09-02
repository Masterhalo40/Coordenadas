import Punto from "./punto.js";

class Main {
    constructor() {
       document.querySelector("#btnPunto").addEventListener("click", () => {
            var punto1 = new Punto();
            var punto2 = new Punto();
            var operación = new Punto();

            punto1.ejeX = 10;
            punto1.ejeY = 72;
            console.log("Coordenada1: " + punto1._toString());

            punto2.ejeX = -5;
            punto2.ejeY = 48;
            console.log("Coordenada2: " + punto2._toString());

            let distancia = operación._distanciaEntrePuntos(punto1.ejeX, punto1.ejeY, punto2.ejeX, punto2.ejeY);
            console.log("La distancia entre los 2 puntos es de " + distancia);
        })
    }
}

let m = new Main();