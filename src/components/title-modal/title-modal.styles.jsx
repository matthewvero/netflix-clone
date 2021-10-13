/** @format */

import styled, { keyframes } from "styled-components/macro";

export const TitleModalContentContainer = styled.div`
	position: fixed;
	width: 98vw;
	top: 5vh;
	left: 1vw;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	overflow: scroll;
	transition: all 200ms linear;
	will-change: all;
	@media (min-width: 1000px) {
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
		opacity: 0;
		@media (min-width: 750px) {
			height: calc(${(props) => props.height}px * 1.4);
			width: calc(${(props) => props.width}px * 1.4);
			left: ${(props) => (props.left ? props.left : 0)}px;
			top: ${(props) => (props.top ? props.top : 0)}px;
			opacity: 1;
		}
	}
	&.modal-enter-active ${TitleModalContentContainer} {
		@media (min-width: 750px) {
			height: 90vh;
			width: 60vw;
			top: 10vh;
			left: 20vw;
			opacity: 1;
		}
		opacity: 1;
	}
	&.modal-exit ${TitleModalContentContainer} {
		@media (min-width: 750px) {
			height: 90vh;
			width: 60vw;
			top: 10vh;
			left: 20vw;
		}
		opacity: 1;
	}
	&.modal-exit-active ${TitleModalContentContainer} {
		opacity: 0;
		@media (min-width: 750px) {
			height: calc(${(props) => props.height}px);
			width: calc(${(props) => props.width}px);
			left: ${(props) => (props.left ? props.left : 0)}px;
			top: ${(props) => (props.top ? props.top : 0)}px;
			opacity: 1;
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

export const TitleModalContentCard = styled.div`
	width: 100%;
	height: auto;
	padding: 5%;
	box-sizing: border-box;
	background-color: #141414;
`;

export const TitleModalImageCard = styled(TitleModalContentCard)`
	position: relative;
	min-height: 70vh;
	background-image: url(${(props) => props.background});
	background-position: top;
	background-size: 100%;
	background-repeat: no-repeat;
	&:after {
		content: "";
		height: 20%;
		width: 100%;
		position: absolute;
		bottom: 0%;
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
	& .title-card-button-container {
		position: absolute;
		bottom: 15%;
		left: 5%;
		height: auto;
		width: auto;
		display: flex;
		justify-content: space-between;
	}
	& .title-card-icon {
		font-size: 1.1rem;
		color: white;
	}
`;

const fadein = keyframes`
	from {
		opacity: 0;
	} to {
		visibility: visible;
		opacity: 1;
	}
`;

export const ContentFader = styled.div`
	height: auto;
	width: 100%;
	visibility: hidden;
	animation: ${fadein} 200ms 400ms linear 1 forwards;
`;

export const TitleModalInfoContainer = styled.div`
	height: auto;
	width: 100%;
	display: grid;
	grid-template-columns: 3fr 2fr;
	grid-template-rows: auto;
`;
