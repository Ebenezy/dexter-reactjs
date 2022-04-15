import React, { Component } from 'react'
import './header.css'
import logo from '../../images/dexter-logo.svg'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import {
    Link,
} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className='pt-3'>
                    <Container>
                        <Navbar.Brand as={Link} to="/"><img src={logo} alt="dexter logo" className='logo' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                            >
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/team">The Team</Nav.Link>
                                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                                <Button className='getintouch-btn' as={Link} to='/contact'>Get in touch</Button>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

