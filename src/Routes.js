import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import SingIn from "./Pages/SingIn/index.jsx";
import SingUp from "./Pages/SingUp/index.jsx";


function routes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/singin" element={<SingIn />} />
                <Route path="/singup" element={<SingUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default routes;