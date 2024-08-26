import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PantallaInicio } from "./views/pantallaInicio";
import { VistaPersonaje } from "./views/vistaPersonaje";
import { VistaVehiculo } from "./views/vistaVehiculo";
import { VistaPlaneta} from "./views/vistaPlaneta";




//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<PantallaInicio />} />
						<Route path="/vistaVehiculo/:uid" element={<VistaVehiculo />} />
						<Route path="/vistaPlaneta/:uid" element={<VistaPlaneta />} />
						<Route path="/vistaPersonaje/:uid" element={<VistaPersonaje />} />
						<Route path="*" element={<h1>Algo salio mal</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
