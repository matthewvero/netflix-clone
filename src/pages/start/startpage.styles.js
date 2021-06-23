/** @format */

import styled from "styled-components/macro";
import {
	InputBox,
	InputContainer,
	InputLabel,
} from "../../components/misc/inputs.styles";
import { Heading, SubHeading } from "../../components/misc/text.styles";

export const StartPageCard = styled.section`
	width: 100%;
	position: relative;
	height: auto;
	width: 100vw;
	max-width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: black;
	background-size: cover;
	background-position: center;
	box-sizing: border-box;
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

export const StartPageEmailInput = styled(InputBox)`
	@media (min-width: 950px) {
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
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

export const AnimationCardTextContainer = styled.div`
	width: 52%;
	padding-right: 50px;
	box-sizing: border-box;
	z-index: 10;
	@media (max-width: 950px) {
		width: 100%;
		padding: 0;
	}
`;

export const LayerAnimationImage = styled.img`
	position: absolute;
	max-width: 100%;
	top: 0%;
	left: 50%;
	transform: translate(-50%, -20%);
`;

export const AnimationImage = styled.img`
	object-fit: cover;
	height: auto;
	max-width: 100%;
	margin-top: -5%;
`;

export const AnimationContainer = styled.div`
	object-fit: cover;
	position: relative;
	width: 42%;
	margin: 0;
	@media (max-width: 950px) {
		width: 100%;
	}
	&.layered {
		margin: 5% 0 10% 0;
		@media (max-width: 950px) {
			width: 100%;
			margin: 7% 0 10% 0;
		}
	}
	&.devices {
		transform: scale(1);
		margin: 0 0 15% 0;

		@media (max-width: 950px) {
			transform: scale(0.8);
		}
	}
`;

export const Animation = styled.video`
	object-fit: cover;
	max-width: 73%;
	max-height: 54%;
`;

export const AnimationCard = styled(StartPageCard)`
	padding: 75px 45px;
	@media (max-width: 550px) {
		padding: 50px 25px;
		height: auto;
	}
`;

export const AnimationCardHeading = styled.h1`
	margin: 0;
	color: white;
	font-size: 50px;
	@media (max-width: 1000px) {
		font-size: 40px;
	}
	@media (max-width: 550px) {
		font-size: 26px;
	}

	&.left {
		@media (min-width: 950px) {
			text-align: left;
		}
	}

	&.right {
		@media (min-width: 950px) {
			text-align: right;
		}
	}
`;

export const AnimationCardSubHeading = styled(SubHeading)`
	font-size: 26px;

	@media (max-width: 950px) {
		font-size: 20px;
	}
	&.left {
		@media (min-width: 950px) {
			text-align: left;
		}
	}

	&.right {
		@media (min-width: 950px) {
			text-align: right;
		}
	}
`;

export const DownLoadCard = styled.div`
	width: 65%;
	height: 20%;
	padding: 8px 12px;
	box-sizing: border-box;
	background-color: black;
	border: 2px solid rgba(255, 255, 255, 0.25);
	border-radius: 10px;
	position: absolute;
	bottom: 10%;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (min-width: 750px) {
		width: 60%;
	}
	@media (min-width: 950px) {
		width: 70%;
		height: 30%;
		gap: 5px;
	}
`;
