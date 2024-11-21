//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { render } from "react-dom";

// constante root para que se pueda hacer llamadas de root render ya que createRoot solo se debe realizar una vez
const root = ReactDOM.createRoot(document.getElementById("app"));

//variable que almacena el contador del número que se ira actualizando cada segundo
let segundos = 0;

let segundosObjetivo = null;

//función para obtener y actualizar el número en el código html
function CalculoEImpresionContador(){
    let unidades = segundos % 10;                
    let decenas = Math.floor(segundos / 10) % 10; 
    let centenas = Math.floor(segundos / 100) % 10; 
    let millares = Math.floor(segundos /1000) % 10;
    let decenaDeMillares = Math.floor(segundos / 10_000) % 10;
    let centenaDeMillares = Math.floor(segundos / 100_000) % 10;
    //renederizar la información
    root.render(<Home
        numberUnidad={unidades} 
        numberDecena={decenas}
        numberCentena={centenas}
        numberMillar={millares}
        numberDecenaDeMillar={decenaDeMillares}
        numberCentenaDeMillar={centenaDeMillares}/>);
    if (segundos === 1_000_000) return (
        clearInterval(intervalo),
        alert("Enhorabuena, llegaste hasta el final, actualiza la página para volver a empezar"));
    else if (segundosObjetivo == segundos) return (
        clearInterval(intervalo),
        alert(`Se ha alcanzado el segundo ${segundosObjetivo}`));
        
}

//se llama a la funcion recien definida para que carguen los datos de la página
CalculoEImpresionContador()

//se define variable globalmente para poder ser llamada en funciones de modificación de comportamiento del contador
let intervalo = null;

function escuchaEmpezar(){
    //se crea condifión if para que no se pueda iniciar varias veces el contador
    if (!intervalo) {
        intervalo = setInterval(() =>{
            segundos++;
            CalculoEImpresionContador()
        }, 1000);
    }
    console.log("empezar");
}

function escuchaParar(){
    //se elimina el intervalo generado en empezar y se devuelve la variable a null para que pueda volver a ser inicializada
    //desde botón empezar
    clearInterval(intervalo);
    intervalo = null
    console.log("parar");
}

function escuchaReset(){
    escuchaParar()
    segundos = 0;
    CalculoEImpresionContador();
    console.log("reset");
}

function validaNumeros(e){
    if (!/[0-9]/.test(e.key)) 
        {e.preventDefault();}
}

function establecerSegundosObjetivo(){
    escuchaReset()
    let numeroObjetivo = document.querySelector("#numeroObjetivo").value;
    segundosObjetivo = numeroObjetivo;
}

export {escuchaEmpezar, escuchaParar, escuchaReset, validaNumeros, establecerSegundosObjetivo}
