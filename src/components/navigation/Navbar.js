import React from "react";
import {Navbar} from "react-bootstrap";

export const NavigationNavbar = () =>
    <Navbar bg="dark">
        <Navbar.Brand href="#home">
            <img
                src="/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <h4 className={'text-white'}>React Todo</h4>
    </Navbar>
