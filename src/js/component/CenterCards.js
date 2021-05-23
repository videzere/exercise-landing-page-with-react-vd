import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { JumboCards } from "./JumboCards.js";
import { Cards } from "./Cards.js";

export function CenterCards() {
	return (
		<Container className="d-flex flex-column justify-content-between">
			<Row className="m-auto">
				<Col className="aling-items-center" xs={12} md={12}>
					<JumboCards />
				</Col>
			</Row>
			<Row className="m-auto">
				<Col className="aling-items-center" xs={12} md={3}>
					<Cards
						title="Card Title"
						description="Lorem ipsum dolor sit ament, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
						label="Find Out More!"
					/>
				</Col>
				<Col className="aling-items-center" xs={12} md={3}>
					<Cards
						title="Card Title"
						description="Lorem ipsum dolor sit ament, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
						label="Find Out More!"
					/>
				</Col>
				<Col className="aling-items-center" xs={12} md={3}>
					<Cards
						title="Card Title"
						description="Lorem ipsum dolor sit ament, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
						label="Find Out More!"
					/>
				</Col>
				<Col className="aling-items-center" xs={12} md={3}>
					<Cards
						title="Card Title"
						description="Lorem ipsum dolor sit ament, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
						label="Find Out More!"
					/>
				</Col>
			</Row>
		</Container>
	);
}
