import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export const Main = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <ToastContainer />
                <Navbar />
                <Routes>
                    <Route path="*" element={<Navigate to="/not-found" />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </React.Fragment>
        </BrowserRouter>
    );
};


