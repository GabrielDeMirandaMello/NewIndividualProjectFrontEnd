import React from "react";
import './index.css';
import { useNavigate } from "react-router-dom";
import { MdAutoStories, MdFormatAlignRight, MdManageAccounts, MdOutlineExitToApp } from "react-icons/md";

export default function Menu(props) {
    const navigate = useNavigate();

    return (
        <>
            <div className="container-navigation">
                <div className="itens-menu">
                    <span className="name-user">Gabriel de Miranda Mello</span>
                    {(props.name === 'history' && <button className="btn-menu" style={{backgroundColor:'#009501', color:'#ffffff'}} onClick={() => navigate('/history')}><MdFormatAlignRight /> Feed Storys</button>) ||
                    <button className="btn-menu" onClick={() => navigate('/history')}><MdFormatAlignRight /> Feed Storys</button>}
                    {(props.name === 'myhistory' && <button className="btn-menu" style={{backgroundColor:'#009501', color:'#ffffff'}} onClick={() => navigate('/myhistory')}><MdAutoStories /> My Storys</button>) ||
                    <button className="btn-menu" onClick={() => navigate('/myhistory')}><MdAutoStories /> My Storys</button>}
                    {(props.name === 'profile' && <button className="btn-menu"style={{backgroundColor:'#009501', color:'#ffffff'}} onClick={() => navigate('/profile')}><MdManageAccounts /> Profile</button>) ||
                    <button className="btn-menu" onClick={() => navigate('/profile')}><MdManageAccounts /> Profile</button>}
                </div>
                <div className="container-logof">
                    <button className="btn-menu" onClick={() => navigate('/')}><MdOutlineExitToApp /> Logof</button>
                </div>
            </div>
        </>
    )
}