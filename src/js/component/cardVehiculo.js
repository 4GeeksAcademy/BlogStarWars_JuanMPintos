import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehiculo = ({ name, uid }) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">or more information click on the "Learn more" button.</p>
                <Link to={`/vistaVehiculo/${uid}`} style={{ textDecoration: "none" }}>
                    <a href="#" className="btn btn-secondary">Learn more!</a>
                </Link>
                <button type="button" className="btn btn-warning">Add to Favorites</button>
            </div>
        </div>
    )
}