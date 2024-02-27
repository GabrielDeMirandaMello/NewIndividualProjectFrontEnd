import React, { useState } from 'react';
import './modal.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { BsFillXCircleFill } from "react-icons/bs";

export default function Modal(isOpen) {
    const [titleStory, setTittleStory] = useState();
    const [descriptionStory, setDescriptionStory] = useState();
    const [idUser] = useState(sessionStorage.getItem("ID"));
    const [nameUser] = useState(sessionStorage.getItem("NAME"));
    const token = sessionStorage.getItem("TOKEN")
    function GetTittle(event) {
        setTittleStory(event.target.value);
    }
    function GetDescription(event) {
        setDescriptionStory(event.target.value);
    }

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

    async function SaveStory() {
        console.log(token);
        await axios.post(`http://localhost:8080/api/history/create/${idUser}`, {
            title: titleStory,
            description: descriptionStory,
            comment: "",
            likeCount: 0,
            nameUser: nameUser
        },{
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
            .then(async response => {
                await Toast.fire({
                    icon: "success",
                    title: "Story Created !",
                    timer: 1000
                });
                window.location.reload();
            })
            .catch(error => console.log(error.response));
    };
    function Cancel() {
        window.location.reload();
    }


    if (isOpen.isOpen) {
        return (
            <div id='modal' className='modal-container-background' >
                <div className='modal-container'>
                    <div className='cancel-modal'>
                        <BsFillXCircleFill className='cancel-modal-icon' onClick={Cancel} />
                    </div>
                    <div className='modal-tittle'>
                        Adicionando sua historia
                    </div>
                    <div className='modal-tittle-story'>
                        Titulo
                        <textarea onChange={GetTittle} className='text-tittle' name="text-description" id="" cols="2" rows="1"></textarea>
                    </div>
                    <div className='modal-description-story'>
                        Descrição
                        <textarea onChange={GetDescription} className='text' name="text-description" id="" cols="10" rows="1"></textarea>
                    </div>
                    <div className='modal-button-story'>
                        <button className='btn-story' onClick={SaveStory}>Criar</button>
                    </div>
                </div>
            </div>
        )
    }
    return false
}
