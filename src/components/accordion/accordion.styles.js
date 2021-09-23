/** @format */

import styled from "styled-components";
export const AccordionSegment = styled.details`
	height: 57px;
	width: 90%;
	margin-bottom: 10px;
	transition: height 300ms linear;
	background-color: #303030;
	position: relative;
	user-select: none;
	@media (min-width: 950px) {
		width: 70%;
	}
	&[open] {
		height: auto;
	}
	&[open] p {
		padding: 20px;
		margin: 0;
		background-color: #303030;
	}
	&[open] .opened {
		display: none;
	}
	&[open] .closed {
		display: block;
	}
	& .closed {
		display: none;
	}
	& .opened,
	.closed {
		font-size: 1.7rem;
	}
`;

export const AccordionSummary = styled.summary`
	min-height: 57px;
	max-height: 57px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
	transform: scaleY(1);
	color: white;
	transform-origin: top;
	user-select: none;
	border-bottom: 1px solid black;
	box-sizing: border-box;
	cursor: pointer;
`;

export const AccordionContainer = styled.div`
	width: 90%;
	min-height: auto;
	margin: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
