/** @format */

import styled from "styled-components";
export const CarouselItemCard = styled.div`
	/* display: none; */
	position: absolute;
	bottom: 0%;
	width: 100%;
	height: 30%;
	left: 0;
	background-color: #333333;
	transform: translateY(100%);
	opacity: 0;
	pointer-events: none;
`;

export const CarouselItemContainer = styled.div`
	position: relative;
	height: 100%;
	min-width: ${(props) => props.$width}px;
	margin: 0 2px;
	color: white;
	border-radius: 4px;
	background-size: cover;
	background-position: center;
	background-image: url(${(props) => props.$backgroundImage});
	transition: all 200ms linear;
	z-index: 0;

	transform-origin: ${(props) => {
		if (props.$left) return "left";
		else if (props.$right) return "right";
		else return "center";
	}};

	&.active {
		transform: scale(1.3);
		z-index: 100;
		transition: all 200ms 300ms linear;
	}
	&:hover ${CarouselItemCard} {
		opacity: 1;
		transition: opacity 10ms 200ms linear;
	}
	@media (min-width: 1100px) {
		min-width: 11vw;
		margin: 0 0.1vw;
	}
`;

export const CarouselItemTitle = styled.div`
	position: relative;
	height: 10%;
	width: auto;
	padding: 10px;
	background-color: #333333;
	color: white;
`;
