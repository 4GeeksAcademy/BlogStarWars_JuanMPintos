import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { CardPersonaje } from "../component/cardPersonaje";
import { Footer } from "../component/footer";

export const Pantalla_inicio = () => {
    return(
        <div>
        <h1>Star Wars Blog</h1>
        <hr />
        <CardPersonaje />
        </div>
    )

}