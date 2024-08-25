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
        <div className="planeta card mb-3">
        <img src="https://imgs.search.brave.com/KtFJd9xxuWNaLwEywQa6P-qd5kEjRXWsWydWqo_Gyrs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdp/eC5idXN0bGUuY29t/L2ludmVyc2UvNTIv/MzkvYjcvNGYvOWU1/My80OWVjL2JhNDUv/OGVkNGI5MmMxYzY2/L2lzLWx1a2Utc2t5/d2Fsa2VyLWFsaXZl/LWluLWVwaXNvZGUt/aXguanBlZz93PTM3/NCZoPTIxMCZmaXQ9/Y3JvcCZjcm9wPWZh/Y2VzJnE9NTAmZHBy/PTI" className="foto_detalle card-img-top" alt="..." />
        <div className="card-body">
        
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
    )
}