import React, { useEffect, useState } from 'react';
import './index.css';
import { BsFillXCircleFill } from "react-icons/bs";
import { TOKEN, API_URL } from "../../../Data/Constants";
import axios from 'axios';

export default function Modal(isOpen) {
    const [listOfStory, setListOfStory] = useState([]);
    const [descriptionStory, setDescriptionStory] = useState("");

    useEffect(() => {
        ShowComments();
    }, [isOpen]);

    async function ShowComments() {
        await axios.get(`${API_URL}/api/comment/all-by-story/${isOpen.story.id}`)
            .then(async response => {
                setListOfStory(response.data)
            })
            .catch(error => {
                if (error.response.status === 404) {
                    setListOfStory([])
                }
            }
            );
    };

    async function CreateComment() {
        await axios.post(`${API_URL}/api/comment/create`,
            {
                name: sessionStorage.getItem("NAME"),
                idStory: isOpen.story.id,
                description: descriptionStory,
            },
            {
                headers: {
                    authorization: `Bearer ${TOKEN}`,
                }
            })
            .then(response => {
                setListOfStory([...listOfStory, response.data]);
                setDescriptionStory("")
            })
            .catch(error => console.log(error.response));
    };

    function GetDescription(event) {
        setDescriptionStory(event.target.value);
    }
    function Cancel() {
        isOpen.onClose();
    }
    if (isOpen.isOpen) {
        return (
            <>
                <div id='modal' className='modal-comments-container-background' >
                    <div className='modal-comments-cards' >
                        <div className='cancel-modal-comments'>
                            <BsFillXCircleFill className='cancel-modal-icon' onClick={Cancel} />
                        </div>
                        <div>
                            <input className='input-add-comment' value={descriptionStory} onChange={GetDescription} type="text" placeholder='Escreva seu comentário' />
                            <button className='btn-add-comment' onClick={CreateComment}>Comentar</button>
                        </div>
                        <div className='container-comments'>
                            {(listOfStory.length > 0 &&
                                listOfStory.map((comment, key) => (
                                    <div className="card-comment" key={key}>
                                        <div className='card-name-comment'>{comment.name}</div>
                                        <div className='card-description-comment'>{comment.description}</div>
                                    </div>
                                ))) || <span className='span-comment'>Nenhum Comentário !</span>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return false
}