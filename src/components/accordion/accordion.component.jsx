/** @format */

import React from "react";
import { AccordionContainer } from "./accordion.styles";
const Accordion = ({ children }) => {
	const segments = document.querySelectorAll("details");
	const handleClick = (e) => {
		segments.forEach((el) => {
			if (el !== e.target.closest("details")) {
				el.open = false;
			}
		});
	};

	return (
		<AccordionContainer onClick={handleClick}>
			{children}
		</AccordionContainer>
	);
};

export default Accordion;
