import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import example from "../../img/image-500x325.jpg";

export function Cards(props) {
	return (
		<Card>
			<Card.Img variant="top" src={example} />
			<Card.Body>
				<Card.Title className="text-center">{props.title}</Card.Title>
				<Card.Text className="text-center">
					{props.description}
				</Card.Text>
			</Card.Body>
			<Card.Footer className="text-center">
				<Button variant="primary">{props.label}</Button>
			</Card.Footer>
		</Card>
	);
}

Cards.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	label: PropTypes.string
};
