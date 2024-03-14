import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CarWidget from '../cart/CarWidget';
import logo from "../navBar/logo3.jpeg";
import './navBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Box } from '@chakra-ui/react';

// Define las rutas una sola vez para reutilizarlas en ambos navbars
const navLinks = [
    { to: "/", label: "Todos" },
    { to: "/categorias/ropa", label: "Ropa" },
    { to: "/categorias/calzado", label: "Calzado" },
    { to: "/categorias/accesorios", label: "Accesorios" }
];

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-desktop">
                <div className="navbar-brand">
                    <Link to={"/"}>
                        <img src={logo} alt="logo ecommerce react" />
                    </Link>
                </div>
                <div className="navbar-links">
                    {navLinks.map((link, index) => (
                        <NavLink key={index} to={link.to} className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>
                <div className="navbar-cart">
                    <Link to={"/cart"}>
                        <CarWidget />
                    </Link>
                </div>
            </div>
            <div className="mobile">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand>
                            <Link to={"/"}>
                                <img src={logo} alt="logo ecommerce react" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {navLinks.map((link, index) => (
                                    <Nav.Link key={index} href={link.to}>{link.label}</Nav.Link>
                                ))}
                                <Box display="flex" alignItems="center">
                                    <Link to={"/cart"} className="nav-link">Carrito</Link>
                                    <CarWidget />
                                </Box>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default NavBar;