/** @format */

import styled from "styled-components";

export const InputLabel = styled.label`
	position: absolute;
	top: 50%;
	left: 7%;
	transform-origin: top left;
	transform: translateY(-20%);
	color: #8c8c8c;
	user-select: none;
	pointer-events: none;
`;

export const InputBox = styled.input`
	padding: 10px 10px 0px;
	margin: 10px 5% 0 5%;
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	border: none;
	font-size: 1.1rem;
	outline: none;
	&:focus ~ ${InputLabel} {
		transition: all 50ms ease-in;
		transform: translateY(-100%) scale(0.8);
		color: #7c7c7c;
		font-weight: 900;
	}
`;
