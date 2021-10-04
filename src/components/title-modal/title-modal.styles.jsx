/** @format */

import styled from "styled-components/macro";

export const TitleModalContentContainer = styled.div`
	position: fixed;

	height: 90vh;
	width: 95vw;
	top: 5vh;
	left: 2.5vw;
	background-color: rgba(0, 0, 0, 0.7);
	transition: all 200ms linear;
	background-image: url(${(props) => props.background});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 6px;
	@media (min-width: 1000px) {
		height: 90vh;
		width: 60vw;
		top: 10vh;
		left: 20vw;
	}
`;

export const TitleModalContainer = styled.div`
	z-index: 10000000;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	&.modal-enter ${TitleModalContentContainer} {
		@media (min-width: 1000px) {
			height: calc(
				${(props) => (props.height ? props.height : 0)}px * 1.4
			);
			width: calc(
				${(props) => (props.width ? props.width : 0)}px * 1.4
			);
			left: ${(props) => (props.left ? props.left : 0)}px;
			top: ${(props) => (props.top ? props.top : 0)}px;
		}
	}
	&.modal-enter-active ${TitleModalContentContainer} {
		@media (min-width: 1000px) {
			height: 90vh;
			width: 60vw;
			top: 10vh;
			left: 20vw;
		}
		height: 90vh;
		width: 95vw;
		top: 5vh;
		left: 2.5vw;
	}
	&.modal-exit ${TitleModalContentContainer} {
		@media (min-width: 1000px) {
			height: 90vh;
			width: 60vw;
			top: 10vh;
			left: 20vw;
		}
		height: 90vh;
		width: 95vw;
		top: 5vh;
		left: 2.5vw;
	}
	&.modal-exit-active ${TitleModalContentContainer} {
		@media (min-width: 1000px) {
			height: calc(
				${(props) => (props.height ? props.height : 0)}px
			);
			width: calc(${(props) => (props.width ? props.width : 0)}px);
			left: ${(props) => (props.left ? props.left : 0)}px;
			top: ${(props) => (props.top ? props.top : 0)}px;
		}
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
	background-color: #141414;
	display: grid;
	place-items: center;
	z-index: 1000000;
	cursor: pointer;
`;

export const TitleModalContent = styled.div`
	position: relative;
	top: 50%;
	left: 0;
	width: 100%;
	min-height: 50%;
	background-color: #141414;
	&:before {
		content: "";
		height: 20%;
		width: 100%;
		position: absolute;
		top: -20%;
		left: 0;
		background: rgb(0, 0, 0);
		background: -moz-linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(20, 20, 20, 1) 100%
		);
		background: -webkit-linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(20, 20, 20, 1) 100%
		);
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(20, 20, 20, 1) 100%
		);
	}
`;
