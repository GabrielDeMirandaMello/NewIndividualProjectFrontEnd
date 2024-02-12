import React from 'react';
import imgLogo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import './Navbar.css'
import Button from '../Button';

function NavBar(props) {
    const navigate = useNavigate();
    return (
        <>
            <div className='content-navbar'>
                <div>
                <img className='details-img' onClick={() => navigate('/')} src={imgLogo} alt="imagem de um planeta com um avião ao lado" />
                <span onClick={() => navigate('/')} style={{cursor:'pointer'}}>History Travels</span>
                </div>
                <div className='buttons-menu'>
                    {props.name === 'Sing In' && <Button color='white' name='Sing In' navi='/singin'/>}
                    {props.name !== 'Sing In' && <Button color='black' name='Sing In' navi='/singin'/>}
                    {props.name === 'Sing Up' && <Button color='white' name='Sing Up' navi='/singup'/>}
                    {props.name !== 'Sing Up' && <Button color='black' name='Sing Up' navi='/singup'/>}
                </div>
            </div>
        </>
    );
}

export default NavBar;