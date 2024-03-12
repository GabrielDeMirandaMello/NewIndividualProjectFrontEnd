import React, { useState } from "react"
import Menu from "../../../Components/menu";
import './index.css'
import { BsPencilFill } from "react-icons/bs";
import axios from "axios";
import { TOKEN, USER_ID, USER_NAME, USER_EMAIL, USER_PHONE, USER_REST_MONTH, USER_FAVORITE_COMPANY, API_URL } from "../../../Data/Constants";
import Swal from "sweetalert2";
import ImagemPerfil from '../../../Components/ImagemPerfil/Imagem.Perfil'
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";

export default function Profile() {
    const [disableName, setDisableName] = useState(true);
    const [disableEmail, setDisableEmail] = useState(true);
    const [disablePhone, setDisablePhone] = useState(true);
    const [disableMonth, setDisableMonth] = useState(true);
    const [disableCompany, setDisableCompany] = useState(true);
    const [idUser] = useState(USER_ID)
    const [nameUser, setNameUser] = useState(USER_NAME);
    const [emailUser, setEmailUser] = useState(USER_EMAIL);
    const [phoneUser, setPhoneUser] = useState(USER_PHONE);
    const [restMonthUser, setRestMonthUser] = useState(USER_REST_MONTH);
    const [favoriteCompanyUser, setFavoriteCompanyUser] = useState(USER_FAVORITE_COMPANY);
    const [imagemPerfil, setImagemPerfil] = useState(null);
    const [urlImgStorage, setUrlImageStorage] = useState("");

    const handleToggleDisabled = (props) => {
        switch (props) {
            case 'name':
                setDisableName(!disableName)
                break;
            case 'email':
                setDisableEmail(!disableEmail)
                break;
            case 'phone':
                setDisablePhone(!disablePhone)
                break;
            case 'month':
                setDisableMonth(!disableMonth)
                break;
            case 'company':
                setDisableCompany(!disableCompany)
                break;
            default:
                break;
        }
    };
    if(imagemPerfil === null) {
        setImagemPerfil(sessionStorage.getItem("UI"));
    }
    function GetNameUser(event) {
        setNameUser(event.target.value);
    }
    function GetEmailUser(event) {
        setEmailUser(event.target.value);
    }
    function GetPhoneUser(event) {
        setPhoneUser(event.target.value);
    }
    function GetRestMonthUser(event) {
        setRestMonthUser(event.target.value);
    }
    function GetFavoriteCompanyUser(event) {
        setFavoriteCompanyUser(event.target.value);
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
    async function UpdateDataUser() {

        await axios.put(`${API_URL}/api/users/update`, {
            id: idUser,
            name: nameUser,
            email: emailUser,
            phone: phoneUser,
            restMonth: restMonthUser,
            favoriteCompany: favoriteCompanyUser
        }, {
            headers: {
                authorization: `Bearer ${TOKEN}`,
            },
        }).then(response => {
            sessionStorage.setItem("REST MONTH", response.data.restMonth)
            sessionStorage.setItem("FAVORITE COMPANY", response.data.favoriteCompany)
            setRestMonthUser(response.data.restMonth);
            setFavoriteCompanyUser(response.data.favoriteCompany);
            handleUpload(response.data.id)
            Toast.fire({
                icon: "success",
                title: "Campos Atualizados !"
            });
        })
        .catch(error => console.log(error.response))
    }

    const handleUpdateFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagemPerfil(reader.result);
            };
            reader.readAsDataURL(file);
            setUrlImageStorage(file);
        }
    };

    async function handleUpload(id) {

        const storageRef = ref(storage, `Users/${id}-imagem-perfil`);

        console.log(id);
        const uploadTask = uploadBytesResumable(storageRef, urlImgStorage);

        uploadTask.on("state_changed",
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress)
            },
            (error) => {
                console.log(error.response)
            },
            () => {
                Toast.fire({
                    icon: "success",
                    title: "Imagem Atualizada !"
                });
            }
        )
    };

    return (
        <>
            <div className="body-home-story">
                <Menu name='profile' />
                <div className="container-feeds-profile">
                    <div className="tittle-profile">Meus Dados</div>
                    
                    <ImagemPerfil img={imagemPerfil} readImg={handleUpdateFile}/>
                    <div className="container-data-user">
                        <label className="label-info-user">Name</label>
                        <div className="input-alter-data">
                            <input value={nameUser} onChange={GetNameUser} className="input-text" type="text" disabled={disableName} />
                        </div>
                        <label className="label-info-user">Email</label>
                        <div className="input-alter-data">
                            <input value={emailUser} onChange={GetEmailUser} className="input-text" type="text" disabled={disableEmail} />
                        </div>
                        <label className="label-info-user">Phone</label>
                        <div className="input-alter-data">
                            <input value={phoneUser} onChange={GetPhoneUser} className="input-text" type="text" disabled={disablePhone} />
                        </div>
                        <label className="label-info-user">Rest Month</label>
                        <div className="input-alter-data">
                            <input value={restMonthUser} onChange={GetRestMonthUser} className="input-text" type="text" disabled={disableMonth} />
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('month')} />
                        </div>
                        <label className="label-info-user">Favorite Company</label>
                        <div className="input-alter-data">
                            <input value={favoriteCompanyUser} onChange={GetFavoriteCompanyUser} className="input-text" type="text" disabled={disableCompany} />
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('company')} />
                        </div>
                        <div className="container-btn-save">
                            <button className="btn-search-story" onClick={UpdateDataUser}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}