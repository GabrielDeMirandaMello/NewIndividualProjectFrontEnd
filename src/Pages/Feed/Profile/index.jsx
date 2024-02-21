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
    const [nameUser, setNameUser] = useState(sessionStorage.getItem("NAME"));
    const [emailUser, setEmailUser] = useState(sessionStorage.getItem("EMAIL"));
    const [phoneUser, setPhoneUser] = useState(sessionStorage.getItem("PHONE"));
    const [restMonthUser, setRestMonthUser] = useState(sessionStorage.getItem("REST MONTH"));
    const [favoriteCompanyUser, setFavoriteCompanyUser] = useState(sessionStorage.getItem("FAVORITE COMPANY"));

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
    return (
        <>
            <div className="body-home-story">
                <Menu name='profile' />
                <div className="container-feeds">
                    <div className="tittle-profile">Meus Dados</div>
                    <div className="container-data-user">
                        <div className="input-alter-data">
                            <input value={nameUser} onChange={GetNameUser} className="input-text" type="text" disabled={disableName}/>
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('name')}/>
                        </div>
                        <div className="input-alter-data">
                            <input value={emailUser} onChange={GetEmailUser} className="input-text" type="text" disabled={disableEmail}/>
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('email')}/>
                        </div>
                        <div className="input-alter-data">
                            <input value={phoneUser} onChange={GetPhoneUser} className="input-text" type="text" disabled={disablePhone}/>
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('phone')}/>
                        </div>
                        <div className="input-alter-data">
                            <input value={restMonthUser} onChange={GetRestMonthUser} className="input-text" type="text" disabled={disableMonth}/>
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('month')}/>
                        </div>
                        <div className="input-alter-data">
                            <input value={favoriteCompanyUser} onChange={GetFavoriteCompanyUser} className="input-text" type="text" disabled={disableCompany}/>
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