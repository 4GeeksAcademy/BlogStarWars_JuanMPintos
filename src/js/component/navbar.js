import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	return (
		<div classNameName="barra_principal" fixed-top>
			<nav className="navbar">
				<div className="barra">
					<a className="navbar-brand" href="#">
						<img className="logo" src="https://pngimg.com/d/star_wars_logo_PNG6.png" alt="logo" width="30" height="24" />
					</a>
					<button type="button" className="btn btn-warning">Favoritos</button>
				</div>
			</nav>
		</div>
	);
};
