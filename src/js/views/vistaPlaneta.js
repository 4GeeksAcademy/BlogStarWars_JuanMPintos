import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardPersonaje } from "../component/cardPersonaje";
import { CardPlaneta } from "../component/cardPlaneta";
import { CardVehiculo } from "../component/cardVehiculo";
import { Context } from "../store/appContext";


export const VistaPlaneta = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {

    }, [])

    return (
        <h1>aca van los planetas</h1>
    )
}