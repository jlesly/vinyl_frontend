import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container, Nav } from 'react-bootstrap'

const NavBar = () => {
        return(       
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/vinyls/new">Add A Vinyl</Nav.Link>
            <Nav.Link href="/categories">Collection by Genres</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
        )
    }

export default NavBar;