/** @format */

import styled from "styled-components";

export const StartPageHeader = styled.header`
	height: 90px;
	width: 94%;
	margin: 0 3%;
	padding-top: 20px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
`;

export const Button = styled.button`
	height: 40px;
	padding: 0 16px;
	background-color: #e50914;
	border: none;
	border-radius: 3px;
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
