import React, { Component, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardPersonaje } from "../component/cardPersonaje";
import { CardPlaneta } from "../component/cardPlaneta";
import { CardVehiculo } from "../component/cardVehiculo";
import { Context } from "../store/appContext";


export const VistaVehiculo = () => {

    const [info, setInfo] = useState()
    const { actions, store } = useContext(Context)
    const parametros = useParams()
    useEffect(() => {
        actions.cargarVehiculo(parametros.uid).then(data => {setInfo(data)})
    }, [])
    if (info)
    return (
        <div className="vehiculo card mb-3">
                <img src={`https://starwars-visualguide.com/assets/img/starships/${parametros.uid}.jpg`}  className="foto_detalle card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{info.properties.name}</h5>
                    <h6>{info.description}</h6>
                    <h6>Model: {info.properties.model}</h6>
                    <h6>Starship: {info.properties.starship_class} cm.</h6>
                    <h6>Cost in Credits: {info.properties.cost_in_credits}</h6>
                    <h6>Passengers: {info.properties.passengers}</h6>
                    <h6>Hyperdrive Rating: {info.properties.hyperdrive_rating}</h6>
                    
                </div>
            </div>
        )
}