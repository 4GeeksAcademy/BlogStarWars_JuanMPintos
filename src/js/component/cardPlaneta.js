import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlaneta = ({ name, uid }) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">For more information click on the "Learn more" button.</p>
                    <Link to={`/vistaPlaneta/${uid}`} style={{ textDecoration: "none" }}>
                        <a href="#" className="btn btn-secondary">Learn more!</a>
                    </Link>
                    <button type="button" className="btn btn-warning">Add to Favorites</button>
                </div>
            </div>

    )
}