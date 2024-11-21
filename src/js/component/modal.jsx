import React from "react";
import { validaNumeros, establecerSegundosObjetivo, useDropDown } from "..";

function Modal(){
    let {dropdownText, dropdownHandler} = useDropDown();
    
    return(
        <>
            {/* botón habilitador del modal */}
            <button type="button" className="col-12  btn btn-dark my-3 px-0 py-4 border-5 border-light-subtle fs-1 fw-bolder" data-bs-toggle="modal" data-bs-target="#modalNumeroObjetivo">
            <i className="fa-regular fa-clock"></i>
            </button>
            {/* fin de botón habilitador del modal */}
            {/* inicio modal */}
            <div className="modal fade" id="modalNumeroObjetivo" tabIndex="-1" aria-labelledby="modalNumeroObjetivoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalNumeroObjetivoLabel">Establecer número objetivo</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="mb-2">
                        Por favor seleccione modo e introduzca un número para que se le alerte cuando llegue a la cifra objetivo o cuando la cuenta atrás llegue a 0.
                        </p>
                        {/* inicio de dropdown para elegir el método de contador */}
                        <div className="d-flex align-items-center">
                            <label className="mb-3 me-2" htmlFor="btn-group">Modo:</label>
                            <div className="btn-group">
                                <button className="btn btn-secondary btn-sm dropdown-toggle mb-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {dropdownText}
                                </button>
                                <ul className="dropdown-menu">
                                    <li><span className="dropdown-item" onClick={dropdownHandler}>Contador</span></li>
                                    <li><span className="dropdown-item" onClick={dropdownHandler}>Cuenta atrás</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* fin de dropdown para elegir el métido de contador */}
                        <input id="numeroObjetivo" className="w-100" type="text" placeholder="Segundos" maxLength={6} onKeyPress={validaNumeros}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={establecerSegundosObjetivo}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
            {/* fin modal */}
        </>
    )
}

export default Modal;