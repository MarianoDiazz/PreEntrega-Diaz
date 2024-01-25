import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CarWidget from '../cart/CarWidget';
import logo from "../navBar/logo.png";
import './navBar.css'

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-brand">
                <Link to={"/"}>
                    <img src={logo} alt="logo ecommerce react" />
                </Link>
            </div>
            <div className="navbar-links">
                <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                    Todos
                </NavLink>

                <NavLink to="/categorias/remeras" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                    Remeras
                </NavLink>

                <NavLink to="/categorias/zapatillas" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                    Zapatillas
                </NavLink>

                <NavLink to="/categorias/buzos" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                    Buzos
                </NavLink>
            </div>
            <div className="navbar-cart">
                <Link to={"/cart"}>
                    <CarWidget />
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
