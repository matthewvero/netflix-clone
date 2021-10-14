/** @format */

import styled from "styled-components";

export const FormErrorText = styled.p`
	color: ${(props) => (props.color ? props.color : "#e87c03")};
	text-align: left;
`;

export const FormErrorsContainer = styled.div`
	height: auto;
	width: 100%;
	display: flex;
	flex-direction: column;
`;
