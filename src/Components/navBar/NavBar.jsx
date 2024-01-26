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
                <NavLink to="/categorias/ropa" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                    Ropa
                </NavLink>
                <NavLink to="/categorias/calzado" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                    Calzado
                </NavLink>
                <NavLink to="/categorias/accesorios" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                    Accesorios
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
