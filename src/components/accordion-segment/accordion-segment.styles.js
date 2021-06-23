/** @format */

import styled from "styled-components";

export const AccordionBar = styled.div`
	min-height: 57px;
	max-height: 57px;
	width: 90%;
	cursor: pointer;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 57px auto;
	place-items: center;
	margin-bottom: 10px;
	overflow: hidden;
	transition: max-height 300ms linear;
	&.collapsed {
		max-height: 1200px;
	}
	will-change: max-height;
	@media (min-width: 950px) {
		width: 70%;
	}
`;
