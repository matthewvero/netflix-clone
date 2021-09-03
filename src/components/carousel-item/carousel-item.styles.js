/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components/macro";

export const CarouselItemBackground = styled.img`
	width: 100%;
	height: 101%;
	position: absolute;
	object-fit: cover;
	will-change: transform;
	transition: all 300ms cubic-bezier(0.15, 0.75, 0.3, 1.03);
`;

export const CarouselItemContent = styled.div`
	width: 100%;
	height: 35%;
	display: flex;
	flex-direction: column;
	padding: 4%;
	box-sizing: border-box;
	display: none;
	&:hover {
		display: block;
	}
`;

export const CarouselItemContainer = styled.div`
	z-index: 0;
	height: 100%;
	min-width: calc(${(props) => props.$width}% - 4px);
	margin: 0 2px;
	display: flex;
	flex-direction: column-reverse;
	border-radius: 6px;
	color: white;
	background-color: #141414;
	overflow: hidden;
	transition: transform 200ms linear;
	transform-origin: ${(props) => {
		if (props.$left) return "left";
		else if (props.$right) return "right";
		else return "center";
	}};
	will-change: transform;
	cursor: pointer;
	&:hover {
		transform: scale(1.4);
		z-index: 1000;
		transition: transform 300ms 300ms
			cubic-bezier(0.15, 0.75, 0.3, 1.03);
		box-shadow: 0 0 10px black;
	}

	&:hover ${CarouselItemBackground} {
		transition: transform 300ms 300ms
			cubic-bezier(0.15, 0.75, 0.3, 1.03);
		transform: translateY(-35%);
	}
	&:hover ${CarouselItemContent} {
		display: block;
	}
	& span:after {
		content: "•";
		margin: 0 1px;
		color: #777777;
		font-size: 1rem;
	}
	& span:last-of-type:after {
		content: "";
	}
`;

export const CarouselButton = styled.div`
	height: 20px;
	width: 20px;
	margin: 1.5%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: #2a2a2a;
	border: #aaaaaa 1px solid;
	text-align: middle;

	&:hover {
		border: #eeeeee 1px solid;
	}
`;

export const CarouselButtonIcon = styled(FontAwesomeIcon)`
	font-size: 0.5rem;
`;
