import React, { useState } from 'react';
import Navbar from '../../Components/navbar/Navbar';
import { useNavigate } from "react-router-dom";
import './index.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import { BsFillPersonFill, BsEnvelopeAtFill, BsFillUnlockFill, BsTelephonePlusFill, BsLuggageFill, BsFillPeopleFill } from "react-icons/bs";
import { API_URL } from "../../../Data/Constants";

export default function Home() {
    const [view, setView] = useState("password");
    const [nameUser, setNameUser] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [phoneUser, setPhoneUser] = useState("");
    const [restMonthUser, setRestMonthUser] = useState("");
    const [favoriteCompanyUser, setFavoriteCompanyUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");

    const navigate = useNavigate();
    const mostrarSenha = () => {
        if (view === "password") {
            setView("text");
        } else {
            setView("password");
        }
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
    function GetPasswordUser(event) {
        setPasswordUser(event.target.value);
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

    const regexSenhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12}$/;

    function validationData() {
        if (nameUser.length <= 3) {
            Toast.fire({
                icon: "error",
                title: "O campo 'Name' tem que ter no minimo 4 caracteres !"
            });
            return false
        } else if (!emailUser.includes("@")) {
            Toast.fire({
                icon: "error",
                title: "O campo 'Email' tem que ter o caracter '@' !"
            });
            return false;
        } else if (phoneUser.length <= 10) {
            Toast.fire({
                icon: "error",
                title: "O campo 'Phone' tem que ter no minimo 11 caracteres !"
            });
            return false;
        } else if (restMonthUser.length <= 0 || restMonthUser === "") {
            Toast.fire({
                icon: "error",
                title: "O campo 'Rest Month' não pode estar vazio !"
            });
            return false;
        } else if (favoriteCompanyUser.length <= 0 || favoriteCompanyUser === "") {
            Toast.fire({
                icon: "error",
                title: "O campo 'Favorite Company' não pode estar vazio !"
            });
            return false;
        } else if (!regexSenhaForte.test(passwordUser)) {
            Toast.fire({
                icon: "error",
                title: "Password tem que ter 12 caracteres, 1 carater especial, 1 letra maiuscula, 1 letra minuscula e 1 numero !"
            });
            return false;
        } else {
            return true;
        }
    }
    async function SignUp() {
        if (validationData()) {
            const headersList = {
                "Content-Type": "application/json",
            }
            await axios.post(
                `${API_URL}/api/users/register`,
                {
                    name: nameUser,
                    email: emailUser,
                    phone: phoneUser,
                    password: passwordUser,
                    restMonth: restMonthUser,
                    favoriteCompany: favoriteCompanyUser,
                    role: "USER"
                },
                headersList
            ).then(async response => {
                if (response.status === 201) {
                    await Toast.fire({
                        icon: "success",
                        title: "Cadastro Realizado !"
                    });
                    navigate("/singin")
                }
            }).catch(error => {
                console.log(error.response)
            });
        }
    }

    return (
        <>
            <body className="body-home-singup">
                <Navbar name='Sing Up' />
                <div className='container-form'>
                    <div class="form">
                        <div class="flex-column">
                            <label>Name </label>
                        </div>
                        <div class="inputForm">
                            <BsFillPersonFill />
                            <input onChange={GetNameUser} type="text" class="input" placeholder="Enter your Name" />
                        </div>
                        <div class="flex-column">
                            <label>Email </label>
                        </div>
                        <div class="inputForm">
                            <BsEnvelopeAtFill />
                            <input onChange={GetEmailUser} type="text" class="input" placeholder="Enter your Email" />
                        </div>
                        <div class="flex-column">
                            <label>Phone </label>
                        </div>
                        <div class="inputForm">
                            <BsTelephonePlusFill />
                            <input onChange={GetPhoneUser} type="text" class="input" placeholder="Enter your Phone" />
                        </div>
                        <div class="flex-column">
                            <label>Rest Month </label>
                        </div>
                        <div class="inputForm">
                            <BsLuggageFill />
                            <input onChange={GetRestMonthUser} type="text" class="input" placeholder="Enter your Rest Month" />
                        </div>
                        <div class="flex-column">
                            <label>Favorite Company </label>
                        </div>
                        <div class="inputForm">
                            <BsFillPeopleFill />
                            <input onChange={GetFavoriteCompanyUser} type="text" class="input" placeholder="Enter your Favorite Company" />
                        </div>
                        <div class="flex-column">
                            <label>Password </label></div>
                        <div class="inputForm">
                            <BsFillUnlockFill />
                            <input onChange={GetPasswordUser} type={view} class="input" placeholder="Enter your Password" />
                            <svg onClick={() => mostrarSenha()} style={{ cursor: 'pointer' }} viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
                        </div>
                        <button onClick={SignUp} class="button-submit">Sign Up</button>
                        <p class="p">Already have an account ? <span class="span" onClick={() => navigate('/singin')}>Sign In</span>

                        </p>

                    </div>
                </div>
            </body>
        </>
    )
}