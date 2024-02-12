import React from "react";
import { useNavigate } from "react-router-dom";
import '../Pages/Home/navbar/Navbar.css'

function Button(props) {
    const navigate = useNavigate();
    let botao;
    if(props.name === 'Sing In'){
        botao = <button className='button-entrar' style={{color:props.color}} onClick={() => navigate(props.navi)} >{props.name}</button>
    }
    if(props.name === 'Sing Up') {
        botao = <button className='button-entrar' style={{color:props.color}} onClick={() => navigate(props.navi)} >{props.name}</button>
    }

    return (
        <>
            {botao}
        </>
    )
}

export default Button;