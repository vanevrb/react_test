import React from "react";
import { Image, Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from '../assets/logo.png';
import Dog_main from '../assets/img/general.png';

const Header = () => (
    <>
        
        <Navbar  bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
            <Nav defaultActiveKey="/home" as="ul" >
                <Nav.Item as="li">
                    <Link className="nav-link" to="/home">Home</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className="nav-link" to="/dogs">List Dogs</Link>
            
                </Nav.Item>
            </Nav>
        </Navbar>
        <Image style={{ width: '100%' }} src={Dog_main} fluid />
    </>
);
export default Header;