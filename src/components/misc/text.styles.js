/** @format */

import styled from "styled-components/macro";

export const Heading = styled.h1`
	font-size: 64px;
	margin-bottom: 0;
	color: white;
	max-width: 730px;
	@media (max-width: 1450px) {
		font-size: 50px;
	}
	@media (max-width: 550px) {
		font-size: 28px;
	}
`;

export const SubHeading = styled.h2`
	margin-bottom: 0;
	color: white;
	font-weight: 400;
	font-size: 26px;
	margin: 16px 0;
	@media (max-width: 550px) {
		font-size: 18px;
	}
`;

export const EmailFormTitle = styled.h3`
	font-size: 23px;
	margin-bottom: 0;
	color: white;
	font-weight: 400;
	margin: 0;
	padding: 0 15%;
	box-sizing: border-box;
	@media (max-width: 750px) {
		font-size: 18px;
		padding: 0 10%;
	}
`;
