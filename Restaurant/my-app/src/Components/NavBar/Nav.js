import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Nav.css"
import logo from "../../IMG/logo.png"
import { Zoom } from "react-awesome-reveal";


function NavBar() {
    return (
        <Navbar expand="lg" className='nav sticky-top '>
        <Container>
            <Zoom direction='right'>
            <Navbar.Brand href="#home"><img src={logo} title='logo' alt=''className='logo' id='home'/></Navbar.Brand>
            </Zoom>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mt-2 ">
                <Nav.Link href="#home" className='active'>Home</Nav.Link>
                <Nav.Link href="#link" className='active'>About Us</Nav.Link>
                <Nav.Link href="#link" className='active'>Explore Food</Nav.Link>
                <Nav.Link href="#link" className='active'>Reviews</Nav.Link>
                <Nav.Link href="#link" className='active'>FAQ</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link className='button'>+2001211559176</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;