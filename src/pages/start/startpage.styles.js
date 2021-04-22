/** @format */

import styled from "styled-components/macro";
import {
	InputBox,
	InputContainer,
	InputLabel,
} from "../../components/misc/inputs.styles";

export const StartPageCard = styled.section`
	width: 100%;
	position: relative;
	height: 700px;
	width: 100vw;
	max-width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: black;
	background-size: cover;
	background-position: center;
	@media (max-width: 550px) {
		height: 525px;
	}
	border-bottom: solid 8px #222;
`;

export const StartPageHeader = styled.header`
	height: 90px;
	width: 100%;
	padding: 20px 3% 0 3%;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(0, 0, 0, 1) 78%,
		rgba(0, 0, 0, 1) 100%
	);
`;

export const Button = styled.button`
	height: 40px;
	padding: 0 16px;
	background-color: #e50914;
	border: none;
	border-radius: 2px;
	margin-top: 4px;
	font-family: Arial, Helvetica, sans-serif;
	color: white;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		background-color: #f40612;
	}
`;

export const SignInButton = styled(Button)`
	height: 40px;
	margin-top: 8px;
	padding: 7px 17px;
	&:hover {
		background-color: #e50914;
	}
`;

export const OurStoryContainer = styled.div`
	height: auto;
	display: flex;
	padding: 70px 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 700px) {
		width: 90%;
		padding: 30px 0;
	}
	@media (min-width: 700px) {
		width: 75%;
	}
	@media (min-width: 1100px) {
		width: 60%;
	}
`;

export const StartPageFormInputContainer = styled.div`
	position: relative;
	width: 100%;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media (max-width: 750px) {
		width: 500px;
	}
	@media (max-width: 550px) {
		width: 400px;
	}
`;

export const StartPageEmailInput = styled(InputBox)`
	@media (min-width: 950px) {
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
	}
	&:focus ~ ${InputLabel} {
		transition: all 50ms ease-in;
		transform: translateY(-100%) scale(0.8);
		color: #7c7c7c;
	}
`;

export const StartPageInputContainer = styled(InputContainer)`
	width: 100%;
	@media (min-width: 950px) {
		width: 70%;
	}
`;

export const StartPageButton = styled(Button)`
	margin-top: 10px;
	font-weight: 400;
	@media (min-width: 950px) {
		width: 30%;
		height: 60px;
		font-size: 26px;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
	}
`;
