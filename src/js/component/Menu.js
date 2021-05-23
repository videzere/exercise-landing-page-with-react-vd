import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export function Menu() {
	return (
		<Navbar expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#about">About</Nav.Link>
				<Nav.Link href="#services">Services</Nav.Link>
				<Nav.Link href="#contact">Contact</Nav.Link>
			</Nav>
		</Navbar>
	);
}
