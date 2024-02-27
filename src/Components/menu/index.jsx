import React, { useEffect, useState } from "react";
import './index.css';
import { useNavigate } from "react-router-dom";
import { MdAutoStories, MdFormatAlignRight, MdManageAccounts, MdOutlineExitToApp } from "react-icons/md";

export default function Menu(props) {
    const [name, setName] = useState('');
    useEffect(() => {
        setName(sessionStorage.getItem("NAME"))
    }, [name])
    const navigate = useNavigate();
    async function Logout() {
        sessionStorage.clear()
        setName('')
        navigate('/')
    }
    return (
        <>
            <div className="container-navigation">
                <div className="itens-menu">
                    <span className="name-user">{name}</span>
                    {(props.name === 'history' && <button className="btn-menu" style={{backgroundColor:'#009501', color:'#ffffff'}} onClick={() => navigate('/history')}><MdFormatAlignRight className="icon-menu-navigation" /> Feed Storys</button>) ||
                    <button className="btn-menu" onClick={() => navigate('/history')}><MdFormatAlignRight className="icon-menu-navigation"/> Feed Storys</button>}
                    {(props.name === 'myhistory' && <button className="btn-menu" style={{backgroundColor:'#009501', color:'#ffffff'}} onClick={() => navigate('/myhistory')}><MdAutoStories className="icon-menu-navigation"/> My Storys</button>) ||
                    <button className="btn-menu" onClick={() => navigate('/myhistory')}><MdAutoStories className="icon-menu-navigation"/> My Storys</button>}
                    {(props.name === 'profile' && <button className="btn-menu"style={{backgroundColor:'#009501', color:'#ffffff'}} onClick={() => navigate('/profile')}><MdManageAccounts className="icon-menu-navigation"/> Profile</button>) ||
                    <button className="btn-menu" onClick={() => navigate('/profile')}><MdManageAccounts className="icon-menu-navigation"/> Profile</button>}
                </div>
                <div className="container-logof">
                    <button className="btn-menu" onClick={() => Logout()}><MdOutlineExitToApp className="icon-menu-navigation"/> Logof</button>
                </div>
            </div>
        </>
    )
}