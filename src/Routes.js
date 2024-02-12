import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import SingIn from "./Pages/SingIn/index.jsx";
import SingUp from "./Pages/SingUp/index.jsx";
import History from "./Pages/Feed/History/index.jsx";
import MyHistory from "./Pages/Feed/MyHistory/index.jsx";
import Profile from "./Pages/Feed/Profile/Index.jsx";

function routes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/singin" element={<SingIn />} />
                <Route path="/singup" element={<SingUp />} />
                <Route path="/history" element={<History />} />
                <Route path="/myhistory" element={<MyHistory />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default routes;