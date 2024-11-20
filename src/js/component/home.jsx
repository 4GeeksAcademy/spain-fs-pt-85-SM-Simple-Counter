import React from "react";
import Button from "./button";
import { escuchaEmpezar, escuchaParar, escuchaReset } from "..";
import Modal from "./modal";

//create your first component
const Home = (props) => {
	return (
		<>
			<div className="row bg-dark justify-content-center">
				<div className="d-flex col-11 col-lg-1 col-md-11 me-3">
					<Modal/>
				</div>
				{/* <div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder"><i className="fa-regular fa-clock"></i></div> */}
				<div className="col-2 col-lg-1 bg-dark m-3 px-0 py-4 border border-5 border-light-subtle rounded text-center text-white fs-1 fw-bolder">{props.numberCentenaDeMillar}</div>
				<div className="col-2 col-lg-1 bg-dark m-3 px-0 py-4 border border-5 border-light-subtle rounded text-center text-white fs-1 fw-bolder">{props.numberDecenaDeMillar}</div>
				<div className="col-2 col-lg-1 bg-dark m-3 px-0 py-4 border border-5 border-light-subtle rounded text-center text-white fs-1 fw-bolder">{props.numberMillar}</div>
				<div className="col-2 col-lg-1 bg-dark m-3 px-0 py-4 border border-5 border-light-subtle rounded text-center text-white fs-1 fw-bolder">{props.numberCentena}</div>
				<div className="col-2 col-lg-1 bg-dark m-3 px-0 py-4 border border-5 border-light-subtle rounded text-center text-white fs-1 fw-bolder">{props.numberDecena}</div>
				<div className="col-2 col-lg-1 bg-dark m-3 px-0 py-4 border border-5 border-light-subtle rounded text-center text-white fs-1 fw-bolder">{props.numberUnidad}</div>
			</div>
			<div className="d-flex justify-content-center">
				<Button id="empezar" className="mx-2 my-4 btn btn-success" buttonValue="Empezar" onClick={escuchaEmpezar}/>
				<Button id="parar" className="mx-2 my-4 btn btn-danger"  buttonValue="Parar" onClick={escuchaParar}/>
				<Button id="reset" className="mx-2 my-4 btn btn-secondary"  buttonValue="Reset" onClick={escuchaReset}/>
			</div>
		</>
	);
};

export default Home;
