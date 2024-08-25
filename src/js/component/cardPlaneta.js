import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlaneta = ({ name }) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src="https://imgs.search.brave.com/3EUwlg04EVe50x5jDkXW4yOe1n4_yrqGHdgSw3-OLho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/amVkaXBlZGlhLm5l/dC93L2ltYWdlcy90/aHVtYi9lL2VhL0Nv/cnVzY2FudF9FcDAx/LmpwZy8yNTBweC1D/b3J1c2NhbnRfRXAw/MS5qcGc" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/vistaPlaneta" style={{ textDecoration: "none" }}>
                    <a href="#" className="btn btn-secondary">Learn more!</a>
                </Link>
                <button type="button" className="btn btn-warning">Add to Favorites</button>
            </div>
        </div>

    )
}