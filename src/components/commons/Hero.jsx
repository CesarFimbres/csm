import React from "react";

import { imagesData } from "../../assets/data";

export const Hero = () => {
	console.log("imagesData :>> ", imagesData);
	return (
		<div className="container_full hero">
			<div className="hero-content">
				<h1 className="hero-title white">Canalización y soportería Mexicana</h1>
				<div className="hero-image">
					<img alt={imagesData[0].alt} src={imagesData[0].image} />
				</div>
			</div>
		</div>
	);
};
