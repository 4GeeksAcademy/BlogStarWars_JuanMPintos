import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPersonaje = ({ name }) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src="https://imgs.search.brave.com/zOIiX_qT5CWPsKkDrg4vyb4dWoWidcJYdqCa0HdV3tM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YWwtZXUtNzI2ZjRk/MjYtN2ZkYi9hMjc0/MmU4Ny0xMjZmLTQw/OWYtYTg1MS01MDVj/MzQwNWE5YmEuX0NS/MCwwLDEyMDAsNjI4/X1NYNDYwX1FMNzBf/LmpwZw" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/vistaPersonaje" style={{ textDecoration: "none" }}>
                        <a href="#" className="btn btn-secondary">Learn more!</a>
                    </Link>
                    <button type="button" className="btn btn-warning">Add to Favorites</button>
                </div>
            </div>

    )
}

