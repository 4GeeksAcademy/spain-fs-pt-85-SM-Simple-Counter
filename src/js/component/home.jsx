import React from "react";
import Button from "./button";


//create your first component
const Home = (props) => {
	return (
		<>
			<div className="d-flex bg-dark justify-content-center">
				<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder"><i className="fa-regular fa-clock"></i></div>
				<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberCentenaDeMillar}</div>
				<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberDecenaDeMillar}</div>
				<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberMillar}</div>
				<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberCentena}</div>
				<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberDecena}</div>
				<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberUnidad}</div>
			</div>
			<div className="d-flex justify-content-center">
				<Button id="empezar" className="mx-2 my-4 btn btn-success" buttonValue="Empezar" />
				<Button id="parar" className="mx-2 my-4 btn btn-danger"  buttonValue="Parar"/>
				<Button id="reset" className="mx-2 my-4 btn btn-secondary"  buttonValue="Reset"/>
			</div>
		</>
	);
};

export default Home;
