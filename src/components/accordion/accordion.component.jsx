/** @format */

import React from "react";
import { AccordionContainer } from "./accordion.styles";
const Accordion = ({ children }) => {
	const segments = document.querySelectorAll(".segment");
	// Close all other accordion segments on click
	const handleClick = (e) => {
		segments.forEach((el) => {
			if (el !== e.target.closest("details")) {
				el.open = false;
			}
		});
	};

	return (
		<AccordionContainer onClick={handleClick} id="accordion">
			{children}
		</AccordionContainer>
	);
};

export default Accordion;
