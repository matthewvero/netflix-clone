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

export const ModalContainer = styled.div`
	height: 90vh;
	width: 60vw;
	top: 10vh;
	left: 20vw;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 10000;
	/* animation: ${expandIn} 200ms linear 1 forwards; */
	transition: all 5000ms ease-in;
	background-image: url(${(props) => props.background});
	background-position: auto;
	background-size: cover;
	background-repeat: no-repeat;

	&.modal-enter {
		height: 450px;
		width: 350px;
		left: ${(props) => (props.left ? props.left : 0)}px;
		top: ${(props) => (props.top ? props.top : 0)}px;
	}
	&.modal-enter-active {
		height: 90vh;
		width: 60vw;
		top: 10vh;
		left: 20vw;
	}
`;
