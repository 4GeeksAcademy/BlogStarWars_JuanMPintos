import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardPersonaje } from "../component/cardPersonaje";
import { CardPlaneta } from "../component/cardPlaneta";
import { CardVehiculo } from "../component/cardVehiculo";
import { Context } from "../store/appContext";


export const VistaPersonaje = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.cargarPersonajes()


    }, [])

    return (
        <h1>aca van los personajes</h1>
    )
}