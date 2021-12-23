import React from "react";

export const ItemCard = ({ desc, icon, svg, title }) => {
	return (
		<div className="card card_services">
			<div className="card_services-image">
				{svg ? <img src={svg} alt={title} /> : <i className={icon}></i>}
			</div>
			<h2 className="card_services-title">{title}</h2>
			<p className="card_services-desc">{desc}</p>
		</div>
	);
};
