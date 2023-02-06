import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";

export default () => {
    return(
    <BrowserRouter>
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/Sobre/:ID/:TV" element={<Sobre />}/>


            </Routes>
    </BrowserRouter>
    )
}