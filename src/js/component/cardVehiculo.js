import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehiculo = ({ name }) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src="https://media.gettyimages.com/id/169333703/photo/the-worlds-largest-lego-model-is-on-display-at-times-square-in-new-york-may-23-2013-made-of-5.jpg?s=612x612&w=0&k=20&c=DiDaoJcnNL1nLasiWZyKyv6PKJj7bWrLfjcB-2bHGrc=" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/vistaVehiculo" style={{ textDecoration: "none" }}>
                    <a href="#" className="btn btn-secondary">Learn more!</a>
                </Link>
                <button type="button" className="btn btn-warning">Add to Favorites</button>
            </div>
        </div>
    )
}