import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from '../../../assets/logo.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"
import './Navbar.css'

function NavBar() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary" >
                <Container>
                    <Navbar.Brand href="#home" onClick={() => navigate("/")} >
                        <span className="logo-home">History Travels</span>
                        <img
                            alt=""
                            src={imgLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top img-navbar"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Brand className="justify-content-end">
                        <Button variant="outline-success style-cadastro" onClick={() => navigate("/singup")}> Cadastro </Button>
                        <Button variant="outline-success" onClick={() => navigate("/singin")}> Login </Button>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;