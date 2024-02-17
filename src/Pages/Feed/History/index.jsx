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
                        <div className="card-story">
                            <div className="user-story">Gabriel de Miranda Mello</div>
                            <div className="tittle-story">Titulo da Historia</div>
                            <div className="description-story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="card-story">
                            <div className="user-story">Gabriel de Miranda Mello</div>
                            <div className="tittle-story">Titulo da Historia</div>
                            <div className="description-story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="card-story">
                            <div className="user-story">Gabriel de Miranda Mello</div>
                            <div className="tittle-story">Titulo da Historia</div>
                            <div className="description-story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="card-story">
                            <div className="user-story">Gabriel de Miranda Mello</div>
                            <div className="tittle-story">Titulo da Historia</div>
                            <div className="description-story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="card-story">
                            <div className="user-story">Gabriel de Miranda Mello</div>
                            <div className="tittle-story">Titulo da Historia</div>
                            <div className="description-story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="card-story">
                            <div className="user-story">Gabriel de Miranda Mello</div>
                            <div className="tittle-story">Titulo da Historia</div>
                            <div className="description-story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}