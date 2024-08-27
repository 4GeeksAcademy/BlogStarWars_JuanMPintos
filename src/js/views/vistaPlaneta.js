import React, { Component, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardPersonaje } from "../component/cardPersonaje";
import { CardPlaneta } from "../component/cardPlaneta";
import { CardVehiculo } from "../component/cardVehiculo";
import { Context } from "../store/appContext";


export const VistaPlaneta = () => {

    const [info, setInfo] = useState()
    const { actions, store } = useContext(Context)
    const parametros = useParams()
    
    useEffect(() => {
    actions.cargarPlaneta(parametros.uid).then(data => setInfo(data))

    }, [])
    if (info)
    
        return (
            <div className="planeta card mb-3">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${parametros.uid}.jpg`}  className="foto_detalle card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{info.properties.name}</h5>
                <h6>{info.description}</h6>
                <h6>Diameter: {info.properties.diameter}</h6>
                <h6>Rotation Period: {info.properties.rotation_period}</h6>
                <h6>Orbital Period: {info.properties.orbital_period}</h6>
                <h6>Gravity: {info.properties.gravity}</h6>
                <h6>Population: {info.properties.population}</h6>
                <h6>Climate: {info.properties.climate}</h6>
                <h6>Population: {info.properties.population}</h6>
                <h6>Terrain: {info.properties.terrain}</h6>
                <h6>Surface Water: {info.properties.surface_water}</h6>
            </div>
        </div>
    )
};