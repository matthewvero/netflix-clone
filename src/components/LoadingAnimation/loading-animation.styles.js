/** @format */

import styled, { keyframes } from "styled-components";

export const LoadingAnimationContainer = styled.div`
	position: absolute;
	top: 15%;
	left: 0;
	height: auto;
	width: 100%;
	padding: 0 50px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: space-between;
`;

const loadAnimation = keyframes`
      from {
            background-color: #141414;
      }
      to {
           
            background-color: #252525;
      }
`;

export const CardLoadingAnimation = styled.div`
	height: 300px;
	min-width: 200px;
	border-radius: 6px;
	background-color: #141414;
	margin: 0 5px;
	animation: ${loadAnimation} 1s ${(props) => props.delay || "0"}ms infinite
		ease-in alternate;
`;

export const TextLoadingAnimation = styled(CardLoadingAnimation)`
	height: 30px;
	width: 50px;
	min-width: 100px;
	margin: 20px 30px;
`;

export const CardContainer = styled.div`
	height: 80%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;
