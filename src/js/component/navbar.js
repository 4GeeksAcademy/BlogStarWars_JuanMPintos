import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	return (
		<div className="barra_principal">
			<nav className="navbar">
				<div className="barra">
					<a className="navbar-brand" href="#">
						<Link to={"./"} style={{ textDecoration: "none" }}>
							<img className="logo" src="https://pngimg.com/d/star_wars_logo_PNG6.png" alt="logo" width="30" height="24" />
						</Link>
					</a>
					<button type="button" className="favoritos btn btn-warning">Favorites</button>
				</div>
			</nav>
		</div>
	);
};
