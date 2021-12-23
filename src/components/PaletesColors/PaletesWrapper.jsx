import React from "react";
import { PaletesColor1, PaletesColor2, PaletesColor3 } from "./PaletesColor";

export const PaletesWrapper = () => {
	return (
		<div className="palete wrapper">
			<PaletesColor1 />
			<PaletesColor2 />
			<PaletesColor3 />
		</div>
	);
};
