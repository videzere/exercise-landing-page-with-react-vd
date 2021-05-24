import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export function Menu() {
	return (
		<Navbar
			expand="lg"
			bg="dark"
			variant="dark"
			className="d-flex flex-wrap justify-content-around">
			<Nav>
				<Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
			</Nav>
			<Nav>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link className="text-white" href="#home">
							Home
						</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#services">Services</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Nav>
		</Navbar>
	);
}
