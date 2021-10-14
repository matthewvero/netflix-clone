/** @format */

import styled, { keyframes } from "styled-components/macro";

export const TitleModalContentContainer = styled.div`
	width: 98vw;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	will-change: all;
	overflow: visible;
	transition: all 200ms linear;
	@media (min-width: 1000px) {
		width: 60vw;
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
	box-sizing: border-box;
	display: grid;
	place-items: center;
	padding: vw;
	overflow-y: scroll;
	background-color: rgba(0, 0, 0, 0.5);
	@media(min-width: 1000px){
		padding: 5%;
	}
	
	&.modal-enter ${TitleModalContentContainer} {
		opacity: 0;
		@media (min-width: 750px) {
			transform: scale(0.8);
		}
	}
	&.modal-enter-active ${TitleModalContentContainer} {
		
		@media (min-width: 750px) {
			transform: scale(1);
		}
		opacity: 1;
	}
	&.modal-exit ${TitleModalContentContainer} {
		position: fixed;
		@media (min-width: 750px) {
			height: 90%;
			width: 98%;
			top: 5%;
			left: 1%;
			opacity: 1;
		}
		@media (min-width: 1000px) {
			height: 90%;
			width: 60%;
			top: 10%;
			left: 20%;
			opacity: 1;
		}
		opacity: 1;
	}
	&.modal-exit-active ${TitleModalContentContainer} {
		opacity: 0;
		@media (min-width: 750px) {
			height: ${(props) => props.height}px;
			width: ${(props) => props.width}px;
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
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
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

export const TitleOverview = styled.p`
	color: white;
	text-align: left;
	font-size: 1.1rem;
	grid-column: 1/2;
	padding-right: 10px;
									
`

export const TitleMetaDataContainer = styled.div`
	height: 100%;
	color: white;
	grid-row: 1/3;
	grid-column: 2/3;
	text-align: left;
	display: flex;
	flex-direction: column;
	gap: 10px;
				
`