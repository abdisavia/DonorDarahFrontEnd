import { Link } from "react-router-dom"
import "../css/navbar.css"  
import burgerMenu from "../icons/burgerMenu.svg"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


export default function Navigasi(){
    return(
        <>
            <Navbar bg="" data-bs-theme="dark" className="position-fixed">
                <Container>
                    <Link href="#home" className="Brand">Navbar</Link>
                    <Nav className="me-0 align-items-center">
                        <Nav.Link href="/" className="navItems">Home</Nav.Link>
                        <Nav.Link href="/contacts/1" className="navItems">Kebutuhan</Nav.Link>
                        <Nav.Link href="#features" className="navItems">Forum</Nav.Link>
                        <Nav.Link href="#pricing" className="navItems">Tentang</Nav.Link>
                        <Nav.Link href="#" className="navItems"><Button varian="danger" id="btnLogin">Login</Button></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}