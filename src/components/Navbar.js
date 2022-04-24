import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
        return(       
            <Navbar bg="dark" variant="dark">
          
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/vinyls/new">Add A Vinyl</Nav.Link>
            <Nav.Link href="/categories">Collection by Genres</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
    

            </Nav>
            </Navbar>
        )
    }

export default NavBar;