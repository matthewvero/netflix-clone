/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, {keyframes} from "styled-components/macro";
import {IndicatorGroupContainer} from './indicator-group/indicator-group.styles'

export const CarouselPage = styled.div`
	min-width: 100%;
	height: 100%;
	display: flex;
	position: absolute;
	left: -${(props) => props.$offsetWidth}%;
	will-change: transform;

	&.carouselpage-enter {
		position: absolute;
		transform: translateX(-100%);
	}
	&.carouselpage-enter-active {
		transform: translateX(0);
		transition: transform 400ms ease;
	}
	&.carouselpage-exit {
		position: absolute;
	}
	&.carouselpage-exit-active {
		transform: translateX(100%);
		transition: transform 400ms ease;
	}
	&.forward {
		&.carouselpage-enter {
			position: absolute;
			transform: translateX(100%);
		}
		&.carouselpage-enter-active {
			transform: translateX(0);
			transition: transform 400ms ease;
		}
		&.carouselpage-exit {
			position: absolute;
		}
		&.carouselpage-exit-active {
			transform: translateX(-100%);
			transition: transform 400ms ease;
		}
	}
`;

export const CarouselSlider = styled.div`
	height: 100%;
	width: 90%;
	margin: 0 5%;
	display: flex;
	overflow-x: visible;
	position: relative;
`;

const fadein = keyframes`
	from {
		opacity: 0;
	} to {
		opacity: 1;
	}

`

export const CarouselContainer = styled.div`
	position: relative;
	height: ${(props) => props.$height}px;
	width: 100vw;
	transition: height 100ms linear;
	user-select: none;
	z-index: 100;
	opacity: 0;
	&:hover ${IndicatorGroupContainer} {
		opacity: 1;
	}
	&:hover {
		z-index: 1000;
	}
	animation: ${fadein} 200ms 1 forwards linear;
`;

export const CarouselIcon = styled(FontAwesomeIcon)`
	color: white;
	font-size: 1.5rem;
	transition: transform linear 50ms;
`;

export const CarouselButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 5vw;

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(25, 25, 25, 0.6);

	cursor: pointer;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
	z-index: 101;
	&.left {
		left: 0;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	&:hover ${CarouselIcon} {
		transform: scale(1.4);
	}
`;

export const CarouselTitle = styled.div`
	position: absolute;
	top: -30px;
	left: 50px;
	height: auto;
	width: auto;
	color: white;
	font-size: 20px;
`;

export const CarouselWrapper = styled.div`
	width: auto;
	margin: 5vw 0;
	min-height: 200px;

	@media (min-width: 400px) {
		margin: 6vw 0;
	}
	@media (min-width: 700px) {
		margin: 30px 0;
	}
`;
