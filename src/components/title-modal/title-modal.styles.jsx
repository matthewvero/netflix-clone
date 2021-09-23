/** @format */

import styled, { keyframes } from "styled-components";

const expandIn = keyframes`
      from {
            height: 300px;
	      width: 200px;
            }
      to {
            height: 100vh;
            width: 100vw; 
            top: 0;
            left: 0;
      }
`;

const contractOut = keyframes`
      from {
            
      }
      to {
            height: 300px;
	      width: 200px;
            }
`;

export const TitleModalContainer = styled.div`
	height: 90vh;
	width: 60vw;
	top: 10vh;
	left: 20vw;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 10000;
	/* animation: ${expandIn} 200ms linear 1 forwards; */
	transition: all 200ms linear;
	background-image: url(${(props) => props.background});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 6px;
	&.modal-enter {
		height: calc(
			${(props) => (props.height ? props.height : 0)}px * 1.4
		);
		width: calc(${(props) => (props.width ? props.width : 0)}px * 1.4);
		left: ${(props) => (props.left ? props.left : 0)}px;
		top: ${(props) => (props.top ? props.top : 0)}px;
	}
	&.modal-enter-active {
		height: 90vh;
		width: 60vw;
		top: 10vh;
		left: 20vw;
	}
	&.modal-exit {
		height: 90vh;
		width: 60vw;
		top: 10vh;
		left: 20vw;
	}
	&.modal-exit-active {
		height: calc(${(props) => (props.height ? props.height : 0)}px);
		width: calc(${(props) => (props.width ? props.width : 0)}px);
		left: ${(props) => (props.left ? props.left : 0)}px;
		top: ${(props) => (props.top ? props.top : 0)}px;
	}
`;

export const TitleModalCloseButton = styled.div`
	position: absolute;
	top: 30px;
	right: 30px;
	height: 30px;
	width: 30px;
	padding: 3px;
	border-radius: 50%;
	background-color: #282c34;
	display: grid;
	place-items: center;
	z-index: 1000000;
	cursor: pointer;
`;

export const TitleModalContentContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	min-height: 50%;
	background-color: #282c34;
`;
