import React from "react";
import { useNavigate } from "react-router-dom";
import './navbar/Navbar'

function Button(props) {
    const navigate = useNavigate();
    let botao;
    if(props.name === 'Sign In'){
        botao = <button className='button-entrar' style={{color:props.color}} onClick={() => navigate(props.navi)} >{props.name}</button>
    }
    if(props.name === 'Sign Up') {
        botao = <button className='button-entrar' style={{color:props.color}} onClick={() => navigate(props.navi)} >{props.name}</button>
    }

    return (
        <>
            {botao}
        </>
    )
}

export default Button;