import React from "react";
import { validaNumeros, establecerSegundosObjetivo } from "..";

function Modal(){
    return(
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="col-12  btn btn-dark my-3 px-0 py-4 border-5 border-light-subtle fs-1 fw-bolder" data-bs-toggle="modal" data-bs-target="#modalNumeroObjetivo">
            <i className="fa-regular fa-clock"></i>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="modalNumeroObjetivo" tabIndex="-1" aria-labelledby="modalNumeroObjetivoLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="modalNumeroObjetivoLabel">Establecer número objetivo</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>
                    Por favor ingrese un número objetivo para que una vez alcanzado se le alerte: 
                    </p>
                    <input id="numeroObjetivo" className="w-100" type="text" placeholder="Número" maxLength={6} onKeyPress={validaNumeros}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={establecerSegundosObjetivo}>Save changes</button>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Modal;