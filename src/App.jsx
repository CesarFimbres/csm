// import "./App.css";

import Button from "./components/commons/Button";
import { Hero } from "./components/commons/Hero";
import { PaletesWrapper } from "./components/PaletesColors/PaletesWrapper";
import { Services } from "./components/Services";

function App() {
	return (
		<>
			<Hero />

			<div className="container">
				<Services />
				<PaletesWrapper />
				<div className="card"></div>
			</div>

			<div className="container_full">
				<Button text="Cesar" />
			</div>
		</>
	);
}

export default App;
