import React from "react";
import { Navbar } from "react-bootstrap";

export function FooterCards() {
	return (
		// <div className="bg-primary text-center m-t=100 p-12">
		// 	<span>Copright &copy; Your Website 2019</span>
		// </div>
		<Navbar expand="lg" bg="primary" sticky="bottom">
			<div>
				<span className="text-center p-0 m-0">
					Copright &copy; Your Website 2019
				</span>
			</div>
		</Navbar>
	);
}
