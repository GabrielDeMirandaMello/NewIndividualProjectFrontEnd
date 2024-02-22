import React, { useState } from 'react';
import './modal.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Modal(isOpen) {
    const [tittle, setTittle] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();
    function GetTittle(event) {
        setTittle(event.target.value);
    }
    function GetDescription(event) {
        setDescription(event.target.value);
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
        await Toast.fire({
            icon: "success",
            title: "Historia Publicada !"
        });
        window.location.reload();
    };
    if (isOpen.isOpen) {
        return (
            <div className='modal-container-background'>
                <div className='modal-container'>
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
