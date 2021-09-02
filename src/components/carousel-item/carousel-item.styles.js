/** @format */

import styled from "styled-components/macro";

export const CarouselItemBackground = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	will-change: transform;
	transition: all 300ms cubic-bezier(0.15, 0.75, 0.3, 1.03);
`;

export const CarouselItemContainer = styled.div`
	z-index: 0;

	height: 100%;
	min-width: calc(${(props) => props.$width}% - 4px);
	margin: 0 2px;
	color: white;
	display: flex;
	flex-direction: column-reverse;
	border-radius: 6px;
	background-color: #141414;
	overflow: hidden;
	transition: all 200ms linear;
	transform-origin: ${(props) => {
		if (props.$left) return "left";
		else if (props.$right) return "right";
		else return "center";
	}};
	will-change: transform;
	&:hover {
		transform: scale(1.5);
		z-index: 1000;
		transition: all 300ms 300ms cubic-bezier(0.15, 0.75, 0.3, 1.03);
		box-shadow: 0 0 10px black;
	}

	&:hover ${CarouselItemBackground} {
		transition: all 300ms 300ms cubic-bezier(0.15, 0.75, 0.3, 1.03);
		transform: translateY(-50%);
	}
`;

export const CarouselItemContent = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
`;
