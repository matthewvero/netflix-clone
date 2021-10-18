/** @format */

import styled from "styled-components/macro";

export const Page = styled.div`
	position: relative;
	height: auto;
	min-height: 100vh;
	width: 100vw;
	max-width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: black;
	background-image: ${(props) =>
		props.backgroundImage ? props.backgroundImage : null};
	&.centered {
		justify-content: center;
	}
`;
