
import { Link } from "react-router-dom"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import style from './NavBar.module.css';

function NavBar() {
    return (
    <Navbar expand="lg" className={`${style.navbar} bg-dark navbar-dark position-fixed`}>
        <Container >
        <Navbar.Brand className="text-white"href="/">Skim Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-white"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className={style["nav-links"]} href="/">Home</Nav.Link>
            <Nav.Link className={style["nav-links"]} href="/add-customer">Add Customers</Nav.Link>
            <Nav.Link className={style["nav-links"]} href="/customers">View Customers</Nav.Link>
            <Nav.Link className={style["nav-links"]} href="/products">View Products</Nav.Link>
            <Nav.Link className={style["nav-links"]} href="/add-products">Add Products</Nav.Link>
            <Nav.Link className={style["nav-links"]} href="/orders">View Orders</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar

