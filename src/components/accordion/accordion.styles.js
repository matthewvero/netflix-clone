/** @format */

import styled from "styled-components";

export const AccordionBar = styled.div`
	min-height: 57px;
	max-height: 57px;
	width: 90%;
	background-color: #303030;
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

export const AccordionContentBox = styled.div`
	width: 100%;
	background-color: #303030;
	padding: ${(props) => (props.$collapsed ? "0" : "20px")};
	box-sizing: border-box;
	transition: all 300ms linear;
`;
