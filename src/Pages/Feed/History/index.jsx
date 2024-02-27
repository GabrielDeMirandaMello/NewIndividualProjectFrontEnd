import React, { useEffect, useState } from "react";
import Menu from "../../../Components/menu";
import { useNavigate } from "react-router-dom";
import { BsFillSearchHeartFill, BsFillChatHeartFill, BsFillPlusCircleFill, BsCardList } from "react-icons/bs";
import './index.css'
import Modal from '../../../Components/Modal/modal';
import axios from "axios";
import Swal from "sweetalert2";
import { TOKEN, API_URL } from "../../../Data/Constants";


export default function History() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [isCheckedUserName, setIsCheckedUsername] = useState(true);
    const [isCheckedTittle, setIsCheckedTittle] = useState(false);
    const [isCheckedDescription, setIsCheckedDescription] = useState(false);
    const [filterStory, setFilterStory] = useState("name");
    const [listOfStory, setListOfStory] = useState([]);
    const [likeded, setLikeded] = useState(false)
    const [textGet, setTextGet] = useState("")
    const token = sessionStorage.getItem("TOKEN")
    useEffect(() => {
        if (token === null) {
            navigate('/singin')
        }
    });
    useEffect(() => {
        RenderStorys()
      }, []);
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    
    function ActionModal() {
        setShowModal(!showModal);
    }
    function GetTextInput(event) {
        setTextGet(event.target.value);
    }
    function OnCheckedUsername() {
        setIsCheckedUsername(true);
        setIsCheckedTittle(false);
        setIsCheckedDescription(false);
        setFilterStory("name");
    }
    function OnCheckedTittle() {
        setIsCheckedUsername(false);
        setIsCheckedTittle(true);
        setIsCheckedDescription(false);
        setFilterStory("title");
    }
    function OnCheckedDescription() {
        setIsCheckedUsername(false);
        setIsCheckedTittle(false);
        setIsCheckedDescription(true);
        setFilterStory("description");
    }

    async function FindStory() {
        await axios.get(`${API_URL}/api/history/public/${filterStory}/${textGet}`, {
            headers: {
                authorization: `Bearer ${TOKEN}`,
            },
        })
            .then(response => {
                Toast.fire({
                    icon: "success",
                    title: "Filter applied !",
                });
                setListOfStory(response.data)
            })
            .catch(error => console.log(error.response));
    }

    async function RenderStorys() {

        await axios.get(`${API_URL}/api/history/all`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setListOfStory(response.data)
            })
            .catch(error => console.log(error.response));
    }

    function Liked(idStory) {
        if (!likeded) {
            axios.put(`${API_URL}/api/history/disliked?id='${idStory}'`, {
            headers: {
                authorization: `Bearer ${TOKEN}`,
            },
        })
            .then(response => {
                setLikeded(false)
                alert("descurtido")
                console.log(likeded)
            })
            .catch(error => console.log(error.response));
        } else {
            axios.put(`${API_URL}/api/history/like?id='${idStory}'`, {
                headers: {
                    authorization: `Bearer ${TOKEN}`,
                },
            })
                .then(response => {
                    setLikeded(true)
                    alert("curtido")
                    console.log("Curtido")
                })
                .catch(error => console.log(error));
        }
    }


    return (
        <>
            <div className="body-home-story" onLoad={RenderStorys}>
                <Menu name='history' />
                <div className="container-feeds">
                    <div className="filter-story">
                        <div className="filter-container-input">
                            <div className="filter-button-radio">
                                <label htmlFor="" style={{ fontFamily: "Poppins", fontWeight: 900 }}>Filter by: </label>
                                <div className="radio-inputs">
                                    <label className="radio">
                                        <input type="radio" name="radio" checked={isCheckedUserName} onClick={OnCheckedUsername} />
                                        <span className="name">Name User</span>
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name="radio" checked={isCheckedTittle} onClick={OnCheckedTittle} />
                                        <span className="name">Title Story</span>
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name="radio" checked={isCheckedDescription} onClick={OnCheckedDescription} />
                                        <span className="name">Description Story</span>
                                    </label>
                                </div>
                            </div>
                            <input className="input-filter-story" type="text" onChange={GetTextInput}/>
                        </div>
                        <div className="filter-container-button">
                            <button className="btn-search-story" onClick={FindStory}>
                                <BsFillSearchHeartFill /> Search
                            </button>
                            <button onClick={ActionModal} className="btn-search-story">
                                <BsFillPlusCircleFill /> Story
                            </button>
                            <button onClick={RenderStorys} className="btn-search-story">
                            <BsCardList /> All Story
                            </button>
                        </div>
                    </div>
                    <div className="feed-story">
                        {listOfStory.length >= 0 &&
                            listOfStory.map((story) => (
                                <div className="card-story" key={story.id}>
                                    <div className="user-story">{story.nameUser}</div>
                                    <div className="tittle-story">{story.title}</div>
                                    <div className="description-story">
                                        {story.description}
                                    </div>
                                    <div className="like-story">
                                        <span className="quantity-like">{story.likeCount}</span>
                                        <BsFillChatHeartFill className="like" onClick={() => Liked(story.id)} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Modal isOpen={showModal} />
        </>
    )
}