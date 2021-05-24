import React from "react";
import { Navbar } from "react-bootstrap";

export function Footer() {
	return (
		<Navbar
			expand="lg"
			bg="dark"
			variant="dark"
			className="d-flex flex-wrap justify-content-center aling-items-center p-0 mt-5">
			<div className="text-white p-4 mt-5">
				Copright &copy; Your Website 2019
			</div>
		</Navbar>
	);
}
