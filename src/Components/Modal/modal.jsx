import React, { useState } from 'react';
import './modal.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { BsFillXCircleFill, BsCameraFill } from "react-icons/bs";
import { TOKEN, API_URL } from "../../Data/Constants";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../Pages/firebase';

export default function Modal(isOpen) {
    const [titleStory, setTittleStory] = useState("");
    const [descriptionStory, setDescriptionStory] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [urlImgStorage, setUrlImageStorage] = useState("");
    const [carregandoImg, setCarregandoImg] = useState(false);

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

    function validationData(){
        if(titleStory.length >= 3){
            if(descriptionStory.length >= 3){
                return true
            } else {
                return false
            }
        } else {
            return false;
        }
    }

    async function SaveStory() {
        if(validationData()){
            await axios.post(`${API_URL}/api/story/create/${sessionStorage.getItem("ID")}`, {
                title: titleStory,
                description: descriptionStory,
                comment: "",
                likeCount: 0,
                nameUser: sessionStorage.getItem("NAME")
            }, {
                headers: {
                    authorization: `Bearer ${TOKEN}`,
                }
            })
                .then(async response => {
                    if(!urlImgStorage === ""){
                        handleUpload(response.data.id)
                    }
                    setCarregandoImg(true)
                    window.location.reload();
                })
                .catch(error => console.log(error.response));
        } else {
            Toast.fire({
                icon: "error",
                title: "Preencha os campos com no minimo 3 caracteres !"
            });
        }
    };
    function Cancel() {
        window.location.reload();
    }


    const handleUpdateFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImgUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setUrlImageStorage(file);
        }
    };

    function handleUpload(id) {

        const storageRef = ref(storage, `Posts/${id}-imagem-post`);
        console.log(id);
        const uploadTask = uploadBytesResumable(storageRef, urlImgStorage);

        uploadTask.on("state_changed",
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (progress > 0) {
                    setCarregandoImg(true)
                }
            },
            (error) => {
                console.log(error.response)
            },
            () => {
                window.location.reload();
            }
        )
    };

    if (isOpen.isOpen) {
        return (
            <>
                <div id='modal' className='modal-container-background' >
                    <div className='modal-container'>
                        {carregandoImg && <div class="loader">Creating...<span></span> </div>}
                        {!carregandoImg &&
                            <>
                                <div className='cancel-modal'>
                                    <BsFillXCircleFill className='cancel-modal-icon' onClick={Cancel} />
                                </div>
                                <div className='modal-tittle'>
                                    Adicionando sua historia
                                </div>

                                {(imgUrl && <img src={imgUrl} alt="imagen post" height={"150"} />) ||
                                    <div className="input-div-img">
                                        <input className="input-img" name="file" type="file" onChange={handleUpdateFile} />
                                        {/* <BsCameraFill className='icon-modal' /> */}
                                        <span>Carregue sua Foto</span>
                                    </div>
                                }
                                <div className='modal-tittle-story'>
                                    Titulo
                                    <textarea onChange={GetTittle} className='text-tittle' name="text-description" id="" cols="2" rows="1"></textarea>
                                </div>
                                <div className='modal-description-story'>
                                    Descrição
                                    <textarea onChange={GetDescription} className='text' name="text-description" id="" cols="10" rows="1"></textarea>
                                </div>
                                <div className='modal-button-story'>
                                    <button className='btn-story' type='submit' onClick={SaveStory}>Criar</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </>
        )
    }
    return false
}
