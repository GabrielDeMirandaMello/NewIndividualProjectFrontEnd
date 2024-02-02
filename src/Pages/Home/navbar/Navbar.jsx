import React from 'react';
import imgLogo from '../../../assets/logo.png';
import { useNavigate } from "react-router-dom"
import './Navbar.css'

function NavBar() {
    const navigate = useNavigate();
    return (
        <>
            <div className='content-navbar'>
                <div>
                <img className='details-img' src={imgLogo} alt="imagem de um planeta com um avião ao lado" />
                <span>History Travels</span>
                </div>
                <div className='buttons-menu'>
                    <button className='button-cadastro'>Cadastro</button>
                    <button className='button-entrar'>Entrar</button>
                </div>
            </div>
        </>
    );
}

export default NavBar;