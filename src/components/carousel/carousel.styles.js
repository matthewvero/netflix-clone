/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components/macro";

export const IndicatorGroup = styled.div`
	opacity: 0;
	position: absolute;
	top: -20px;
	right: 30px;
	height: 2px;
	width: auto;
	display: flex;
`;

export const Indicator = styled.div`
	height: 2px;
	width: 12px;
	background-color: ${(props) =>
		props.$activePage === props.$idx ? "white" : "#333333"};
	margin: 1px;
`;

export const CarouselPage = styled.div`
	width: 100%;
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

export const CarouselContainer = styled.div`
	position: relative;
	height: ${(props) => props.$height}px;
	width: 100vw;
	margin: 50px 0;
	transition: height 100ms linear;
	&:hover ${IndicatorGroup} {
		opacity: 1;
	}
	&:hover {
		z-index: 100;
	}
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
	background-color: rgba(50, 50, 50, 0.4);

	cursor: pointer;
	border-radius: 4px;
	z-index: 101;
	&.left {
		left: 0;
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
