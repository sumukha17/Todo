import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Add from "./Add";
import Update from "./Update";

function Nav(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/add" element={<Add/>} />
                <Route path="/Update/:id" element={<Update/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Nav;