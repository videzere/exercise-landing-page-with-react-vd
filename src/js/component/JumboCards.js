import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export function JumboCards() {
	return (
		<Jumbotron>
			<h1>A Warm Welcome</h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industrys standard dummy text
				ever since the 1500s, when an unknown printer took a galley of
				type and scrambled it to make a type specimen book.
			</p>
			<Button variant="primary">Call to Action</Button>{" "}
		</Jumbotron>
	);
}
