//import react into the bundle
import React, {useState} from "react";
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

//se define variable globalmente para poder ser llamada en funciones de modificación de comportamiento del contador
let intervalo = null;
let segundosObjetivo = null;
let dropDownValue = "Contador";
//esta variable es utilizada para que el funcionamiento de la alarma tanto en cuenta atrás como en contador
//funciona correctamente y no salta a destiempo
let cuentaAtrasAlarma = null;

//se llama a la funcion definida a continuación para que carguen los datos de la página
CalculoEImpresionContador()

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
        alert("Enhorabuena, llegaste hasta el final, actualiza la página para volver a empezar."));
    else if (segundosObjetivo == segundos && !cuentaAtrasAlarma && dropDownValue === "Contador") return (
        clearInterval(intervalo),
        alert(`Se ha alcanzado el segundo ${segundosObjetivo}.`));
    else if (dropDownValue === "Cuenta atrás" && cuentaAtrasAlarma == 0 && segundos == 0) return (
        clearInterval(intervalo),
        cuentaAtrasAlarma = null,
        alert(`Han trascurrido ${segundosObjetivo} segundos.`)); 
}

function escuchaEmpezar(){
    //se crea condifión if para que no se pueda iniciar varias veces el contador
    if (!intervalo) {
        //manejo de selección de cuenta atrás
        if (dropDownValue === "Cuenta atrás" && segundosObjetivo > 0){
            intervalo = setInterval(() =>{
                segundos--;
                CalculoEImpresionContador()
            }, 1000);
        }
        // manejo de selecciónd de contador
        else {
            intervalo = setInterval(() =>{
                segundos++;
                CalculoEImpresionContador()
            }, 1000);
        }
    }
}

function escuchaParar(){
    //se elimina el intervalo generado en botón empezar y se devuelve la variable a null para que pueda volver a ser inicializada
    //desde botón empezar
    clearInterval(intervalo);
    intervalo = null
}

function escuchaReset(){
    escuchaParar()
    segundos = 0;
    segundosObjetivo= null;
    CalculoEImpresionContador();
}

//funcion para validar que el input de segundos es un número
function validaNumeros(e){
    if (!/[0-9]/.test(e.key)) 
        {e.preventDefault();}
}


function establecerSegundosObjetivo(){
    escuchaReset();
    let numeroObjetivo = document.querySelector("#numeroObjetivo").value;
    if (numeroObjetivo == 0) return alert("el tiempo establecido debe ser superior a 0");
    segundosObjetivo = numeroObjetivo;
    // actualización de variables globales para el correcto funcionamiento de la alerta e información mostrada en pantalla
    if (dropDownValue === "Cuenta atrás"){
        segundos = segundosObjetivo;
        cuentaAtrasAlarma = 0;
    }
    // actualización de variables globales para el correcto funcionamiento de la alerta e información mostrada en pantalla
    else {
        cuentaAtrasAlarma = null;
        alert(`Tiempo establecido, cuando se alcance el segundo ${numeroObjetivo} se le alertará.`);
    }
    CalculoEImpresionContador()
}

//hook del modal para obtener el valor clicado y que se actualice en pantalla
function useDropDown(){
    let [dropdownText, setDropDownText] = useState("Contador");
    let dropdownHandler = (e) =>{
        setDropDownText(e.target.textContent);
    }
    dropDownValue = dropdownText;
    return {dropdownText, dropdownHandler};
}

export {escuchaEmpezar, escuchaParar, escuchaReset, validaNumeros, establecerSegundosObjetivo, useDropDown}
