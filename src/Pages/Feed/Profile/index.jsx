import React, { useState } from "react"
import Menu from "../../../Components/menu";
import './index.css'
import { BsPencilFill } from "react-icons/bs";

export default function Profile() {
    const [disableName, setDisableName] = useState(true);
    const [disableEmail, setDisableEmail] = useState(true);
    const [disablePhone, setDisablePhone] = useState(true);
    const [disableMonth, setDisableMonth] = useState(true);
    const [disableCompany, setDisableCompany] = useState(true);


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
        }};
    return (
        <>
            <div className="body-home-story">
                <Menu name='profile' />
                <div className="container-feeds">
                    <div className="tittle-profile">Meus Dados</div>
                    <div className="container-data-user">
                        <div className="input-alter-data">
                            <input className="input-text" type="text" disabled={disableName} placeholder="Gabriel Mello" />
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('name')}/>
                        </div>
                        <div className="input-alter-data">
                            <input className="input-text" type="text" disabled={disableEmail} placeholder="GabrielMello9@Gamil.com" />
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('email')}/>
                        </div>
                        <div className="input-alter-data">
                            <input className="input-text" type="text" disabled={disablePhone} placeholder="11976139421" />
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('phone')}/>
                        </div>
                        <div className="input-alter-data">
                            <input className="input-text" type="text" disabled={disableMonth} placeholder="Dezembro" />
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('month')}/>
                        </div>
                        <div className="input-alter-data">
                            <input className="input-text" type="text" disabled={disableCompany} placeholder="Meus Amigos" />
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('company')}/>
                        </div>
                        <div className="container-btn-save">
                            <button className="btn-search-story">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}