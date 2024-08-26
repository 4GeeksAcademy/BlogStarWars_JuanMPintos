import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardPersonaje } from "../component/cardPersonaje";
import { CardPlaneta } from "../component/cardPlaneta";
import { CardVehiculo } from "../component/cardVehiculo";
import { Context } from "../store/appContext";

export const PantallaInicio = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.cargarTodosLosPersonajes()
        actions.cargarTodosLosVehiculos()
        actions.cargarTodosLosPlanetas()
    }, [])

    return (
        <div>
            <h1>Star Wars Blog</h1>
            <hr />
            <h2>Characters</h2>
            <div className="inicio_personajes row d-flex flex-nowrap overflow-auto" >
                {
                    store.people?.map((personaje) => (<CardPersonaje name={personaje.name} uid={personaje.uid} />))
                }
            </div>
            <hr />
            <h2>starships</h2>
            <div className="inicio_vehiculos row d-flex flex-nowrap overflow-auto">
                {
                    store.starships?.map((vehiculo) => (<CardVehiculo name={vehiculo.name} uid={vehiculo.uid}/>))
                }
            </div>
            <hr />
            <h2>Planets</h2>
            <div className="inicio_planetas row d-flex flex-nowrap overflow-auto">
                {
                    store.planets?.map((planeta) => (<CardPlaneta name={planeta.name} uid={planeta.uid} />))
                }
            </div>
        </div>
    );

};