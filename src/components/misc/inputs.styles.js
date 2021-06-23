/** @format */

import styled from "styled-components/macro";

export const InputLabel = styled.label`
	position: absolute;
	top: 50%;
	left: 2%;
	transform-origin: top left;
	transform: translateY(-20%);
	color: #8c8c8c;
	user-select: none;
	pointer-events: none;
	transition: all 50ms ease-in;
`;

export const FormInputContainer = styled.div`
	position: relative;
	width: 100%;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media (max-width: 950px) {
		width: 500px;
	}
	@media (max-width: 550px) {
		width: 400px;
	}
`;

export const InputBox = styled.input`
	padding: 10px 10px 0px;
	margin: 10px 0 0 0;
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	border-radius: 2px;
	border: solid 1px #8c8c8c;
	font-size: 1.1rem;
	outline: none;

	@media (max-width: 750px) {
		height: 48px;
	}
	&.populated ~ ${InputLabel} {
		transform: translateY(-100%) scale(0.8);
		color: #7c7c7c;
		font-weight: 600;
	}
	&.error {
		border: red 1px solid;
	}
	&:focus ~ ${InputLabel} {
		transform: translateY(-100%) scale(0.8);
		color: #7c7c7c;
		font-weight: 600;
	}
`;

export const InputContainer = styled.div`
	position: relative;
`;
