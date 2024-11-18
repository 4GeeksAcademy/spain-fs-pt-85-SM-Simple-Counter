import React from "react";

//create your first component
const Home = (props) => {
	return (
		<div className="d-flex bg-dark justify-content-center">
			<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder"><i className="fa-regular fa-clock"></i></div>
			<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberCentenaDeMillar}</div>
			<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberDecenaDeMillar}</div>
			<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberMillar}</div>
			<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberCentena}</div>
			<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberDecena}</div>
			<div className="bg-dark m-3 p-4 border border-5 border-light-subtle rounded text-white fs-1 fw-bolder">{props.numberUnidad}</div>
		</div>
	);
};

export default Home;
