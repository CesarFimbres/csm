import React from "react";
import { ItemCard } from "./commons/ItemCard";
import { imagesData } from "../assets/data";

export const Services = () => {
	return (
		<div className="services">
			<h1 className="title">Servicios</h1>
			<div className="wrapper">
				<ItemCard
					icon="fas fa-laptop-code"
					title="Maquinado CNC"
					desc="El proceso de maquinado CNC es utilizado para el mecanizado de contornos y superficies de alta precisión que no se logran con maquinas convencionales"
				/>
				<ItemCard
					svg={imagesData[1].image}
					title="Corte laser"
					desc="Al trabajar con láminas metálicas, el proceso de doblado se conoce como la deformación del metal alrededor de un eje recto"
				/>
				<ItemCard
					svg={imagesData[2].image}
					title="Dobladora de lamina"
					desc="Al trabajar con láminas metálicas, el proceso de doblado se conoce como la deformación del metal alrededor de un eje recto"
				/>
				<ItemCard
					svg={imagesData[3].image}
					title="Corte water jet"
					desc="Al trabajar con láminas metálicas, el proceso de doblado se conoce como la deformación del metal alrededor de un eje recto"
				/>
				<ItemCard
					icon="fas fa-object-group"
					title="Diseños especiales"
					desc="Envienos sus planos de diseño o si lo desea podemos ofrecer alguna solución, nuestro departamento de diseño estará encantado de atenderle."
				/>
				<ItemCard
					icon="fas fa-tachometer-alt"
					title="Trabajos urgentes"
					desc="Cometenos las exigencias de su proyecto, ya sea piezas en lamina de diseño unico o de serie y seguro podemos ayudarle."
				/>
			</div>
		</div>
	);
};
