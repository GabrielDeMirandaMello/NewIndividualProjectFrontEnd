import React from "react";
import Menu from "../../../Components/menu";
import './index.css'
import { BsFillSearchHeartFill, BsFillChatHeartFill, BsFillPlusCircleFill } from "react-icons/bs";

export default function History() {
    return (
        <>
            <div className="body-home-story">
                <Menu name='history'/>
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
                            <button className="btn-search-story">
                                <BsFillPlusCircleFill /> Story
                            </button>
                        </div>
                    </div>
                    <div className="feed-story">
                        <div className="card-story">
                            <div className="user-story">Gabriel de Miranda Mello</div>
                            <div className="tittle-story">Titulo da Historia</div>
                            <div className="description-story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </div>
                            <div className="like-story">
                                <span className="quantity-like">45</span>
                                <BsFillChatHeartFill className="like"/>
                            </div>
                        </div>
                        <div className="card-story">
                            <div className="user-story">Gabriel de Miranda Mello</div>
                            <div className="tittle-story">Titulo da Historia</div>
                            <div className="description-story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </div>
                            <div className="like-story">
                                <span className="quantity-like">45</span>
                                <BsFillChatHeartFill className="like"/>
                            </div>
                        </div>
                        <div className="card-story">
                            <div className="user-story">Gabriel de Miranda Mello</div>
                            <div className="tittle-story">Titulo da Historia</div>
                            <div className="description-story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </div>
                            <div className="like-story">
                                <span className="quantity-like">45</span>
                                <BsFillChatHeartFill className="like"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}