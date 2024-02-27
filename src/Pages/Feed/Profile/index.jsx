import React, { useState } from "react"
import Menu from "../../../Components/menu";
import './index.css'
import { BsPencilFill } from "react-icons/bs";
import axios from "axios";
import { TOKEN, USER_ID, USER_NAME, USER_EMAIL, USER_PHONE, USER_REST_MONTH, USER_FAVORITE_COMPANY, API_URL } from "../../../Data/Constants";

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
            setNameUser(response.data.name);
            setEmailUser(response.data.email);
            setPhoneUser(response.data.phone);
            setRestMonthUser(response.data.restMonth);
            setFavoriteCompanyUser(response.data.favoriteCompany);
        })
        .catch(error => console.log(error.response))
    }
    return (
        <>
            <div className="body-home-story">
                <Menu name='profile' />
                <div className="container-feeds">
                    <div className="tittle-profile">Meus Dados</div>
                    <div className="container-data-user">
                        <label className="label-info-user">Name</label>
                        <div className="input-alter-data">

                            <input value={nameUser} onChange={GetNameUser} className="input-text" type="text" disabled={disableName} />
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('name')} />
                        </div>
                        <label className="label-info-user">Email</label>
                        <div className="input-alter-data">
                            <input value={emailUser} onChange={GetEmailUser} className="input-text" type="text" disabled={disableEmail} />
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('email')} />
                        </div>
                        <label className="label-info-user">Phone</label>
                        <div className="input-alter-data">
                            <input value={phoneUser} onChange={GetPhoneUser} className="input-text" type="text" disabled={disablePhone} />
                            <BsPencilFill className="icon-profile" onClick={() => handleToggleDisabled('phone')} />
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