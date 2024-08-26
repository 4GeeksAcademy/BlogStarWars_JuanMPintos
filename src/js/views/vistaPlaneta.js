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
                <h6>Gender: {info.properties.gender}</h6>
                <h6>Height: {info.properties.height} cm.</h6>
                <h6>Hair: {info.properties.hair_color}</h6>
                <h6>Birthyear: {info.properties.birth_year}</h6>
                <h6>Eyes: {info.properties.eye_color}</h6>
            </div>
        </div>
    )
};