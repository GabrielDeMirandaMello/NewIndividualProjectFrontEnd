import React from "react";
import Navigation from "../../../Components/navigation";
import './index.css'
import { BsFillSearchHeartFill } from "react-icons/bs";

export default function History() {
    return (
        <>
            <div className="body-home-story">
                <Navigation />
                <div className="container-feeds">
                    <div className="filter-story">
                        <div className="filter-container-input">
                            <label htmlFor="">Filter by Term</label>
                            <input className="input-filter-story" type="text" />
                        </div>
                        <div className="filter-container-button">
                            <button className="btn-search-story">
                                <BsFillSearchHeartFill /> Search
                            </button>
                        </div>
                    </div>
                    <div className="feed-story">
                        <div>Nome do Usuario</div>
                        <div>Titulo da Historia</div>
                        <div>Campo de Descrição</div>
                    </div>
                </div>
            </div>
        </>
    )
}