/** @format */

import styled from "styled-components";
import { InputBox } from "../../components/misc/inputs.styles";
import { StartPageHeader } from "../start/startpage.styles";

export const SigninFormContainer = styled.form`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	background-color: black;
	padding: 75px 5%;
	box-sizing: border-box;
	& .inputerror {
		color: "orange";
	}
	& .signinbutton {
		width: 100%;
		height: 50px;
		margin-top: 20px;
		font-size: 1.3rem;
	}
`;

export const SignupPageheader = styled(StartPageHeader)`
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
`;

export const SignupPageInput = styled(InputBox)`
	background-color: #333;
	border-radius: 4px;
	border: none;
	color: white;
`;
