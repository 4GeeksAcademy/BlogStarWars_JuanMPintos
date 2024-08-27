import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
const {store, actions} = useContext(Context)
console.log(store.favoritos)
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
				<div>
					{
						store.favoritos.length > 0 ? 
						store.favoritos.map((favorito) => {
							return (
								<p style={{color:"white"}}>{favorito}<i className="fa-solid fa-trash" onClick={()=>{actions.eliminarFavorito(favorito)}}></i></p>
							)
						}):
						<p>empty</p>
					}
				</div>
			</nav>
		</div>
	);
};
