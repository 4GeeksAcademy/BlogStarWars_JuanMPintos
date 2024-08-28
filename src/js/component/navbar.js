import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-logo" href="#">
					<Link to={"./"} style={{ textDecoration: "none" }}>
						<img className="logo" src="https://pngimg.com/d/star_wars_logo_PNG6.png" alt="logo" width="30" height="24" />
					</Link>
				</a>
			</div>
			<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites ({store.favoritos.length})
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {
                            store.favoritos.length > 0 ? (
                                store.favoritos.map((favorito, index) => (
                                    <li key={index}>
                                        <a className="dropdown-item" href="#">
                                            {favorito}
                                            <i
                                                className="fa-solid fa-trash"
                                                onClick={() => actions.eliminarFavorito(favorito)}
                                                style={{ marginLeft: '10px', cursor: 'pointer' }}
                                            ></i>
                                        </a>
                                    </li>
                                ))
                            ) : (
                                <p className="dropdown-item">You don't have favorites</p>
                            )
                        }
                    </ul>
	</nav >









	)}
