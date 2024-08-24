import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardPersonaje } from "../component/cardPersonaje";
import { CardPlaneta } from "../component/cardPlaneta";
import { CardVehiculo } from "../component/cardVehiculo";
import { Context } from "../store/appContext";

export const Pantalla_inicio = () => {
    const { actions, store } = useContext(Context)

useEffect(() => {
    actions.cargarTodosLosPersonajes()
    actions.cargarTodosLosVehiculos()
    actions.cargarTodosLosPlanetas()
}, [])

    return(
        <div>
        <h1>Star Wars Blog</h1>
        <hr/>
        <h2>Personajes</h2>
        <div className="inicio_personajes" >
        {
            store.people?.map((personaje) => (<CardPersonaje name={personaje.name}/>))
        }
        </div>
        <hr/>
        <h2>Vehiculos</h2>
        <div className="inicio_vehiculos">
            {
                store.starships?.map((vehiculo) => (<CardVehiculo name={vehiculo.name}/>))
            }
        <hr/>
        </div>
        <h2>Planetas</h2>
        <div className="inicio_planetas">
            {
                store.planets?.map((planeta) => (<CardPlaneta name={planeta.name}/>))
            }
        </div>
        </div>
    );

};