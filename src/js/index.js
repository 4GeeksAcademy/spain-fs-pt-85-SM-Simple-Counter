//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { render } from "react-dom";
import Button from "./component/button.jsx";

//funciones a cargar cuando se inicia la página
window.onload = function(){
    CalculoEImpresionContador();
    escuchaParar();
}

// constante root para que se pueda hacer llamadas de root render ya que createRoot solo se debe realizar una vez
const root = ReactDOM.createRoot(document.getElementById("app"));

let numero = 0;
function CalculoEImpresionContador(){
    let unidades = numero % 10;                
    let decenas = Math.floor(numero / 10) % 10; 
    let centenas = Math.floor(numero / 100) % 10; 
    let millares = Math.floor(numero /1000) % 10;
    let decenaDeMillares = Math.floor(numero / 10_000) % 10;
    let centenaDeMillares = Math.floor(numero / 100_000) % 10;
    //renderizar la 
    root.render(<Home
        numberUnidad={unidades} 
        numberDecena={decenas}
        numberCentena={centenas}
        numberMillar={millares}
        numberDecenaDeMillar={decenaDeMillares}
        numberCentenaDeMillar={centenaDeMillares}/>)
        if (numero === 1_000_000) return (
            clearInterval(intervalo),
            alert("Enhorabuena, llegaste hasta el final, actualiza la página para volver a empezar")
        );
}

let intervalo = setInterval(() =>{
    //se llama a la función para obtener y actualizar el número en el código html
    CalculoEImpresionContador()
    //se aumenta en 1 el número
    numero++;
}, 1000);

function escuchaEmpezar(){
    botonEmpezar.addEventListener("click", (e) =>{
        intervalo;
    });
}

function escuchaParar(){
    let botonParar = document.querySelector("#Parar")
    botonParar.addEventListener("click", (e) =>{
        clearInterval(intervalo);
    });
}

function escuchaReset(){
    botonReset.addEventListener("click", (e) =>{
        clearInterval(intervalo);
        numero = 0;
        CalculoEImpresionContador();
    });
}


// En un principio había creado esta forma de contar para que se evalúe en que punto estamos
// e igualando cada variable inicialmente a 0 de tal forma que así para cuando cualquier valor
// llegase a 10, el siguiente valor del número volviese a 0 y la siguiente unidad tuviese un valor +1
// pero es horrendo, por lo que buscando un poco encontre la forma con la que se está calcualndo actualmente
// function compruebaValorPosicional(){
//     if (unidad === 10){
//         decena++;
//         unidad = 0;
//     }
//     if (decena === 10){
//         centena++;
//         decena = 0;
//     }
//     if (centena === 10){
//         millar++;
//         centena = 0;
//     }
//     if (millar === 10){
//         decenaDeMillar++;
//         millar = 0;
//     } 
//     if (decenaDeMillar === 10) {
//         centenaDeMillar++;
//         decenaDeMillar = 0;
//     }
//     if (centenaDeMillar === 10) alert("Enhorabuena, llegaste hasta el final, actualiza la página para volver a empezar");
// }

// definición de variables numéricas
// let unidad = 0;
// let decena = 0;
// let centena = 0;
// let millar = 0;
// let decenaDeMillar = 0;
// let centenaDeMillar = 0;

// función para actualizar los valores del html y sumar 1 a las unidades
// setInterval(() =>{
//     // compruebaValorPosicional()
//     root.render(<Home 
//         numberUnidad={unidad} 
//         numberDecena={decena}
//         numberCentena={centena}
//         numberMillar={millar}
//         numberDecenaDeMillar={decenaDeMillar}
//         numberCentenaDeMillar={centenaDeMillar}/>)
//     unidad++;
// }, 1000);