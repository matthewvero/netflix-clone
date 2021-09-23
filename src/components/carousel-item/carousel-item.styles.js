/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CarouselItemBackground = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	object-fit: cover;
	will-change: transform;
	transition: all 300ms cubic-bezier(0.15, 0.75, 0.3, 1.03);
	border-radius: 6px;
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
	min-height: 100%;
	min-width: calc(${(props) => props.$width}% - 4px);
	margin: 0 2px;
	display: flex;
	flex-direction: column-reverse;
	border-radius: 6px;
	color: white;
	background-color: #141414;
	transition: z-index 1ms 300ms linear, transform 200ms linear;
	transform-origin: ${(props) => {
		if (props.$left) return "left";
		else if (props.$right) return "right";
		else return "center";
	}};
	will-change: transform;
	cursor: pointer;
	&:hover {
		transform: scale(1.4);
		z-index: 100;
		transition: transform 350ms 500ms
			cubic-bezier(0.15, 0.75, 0.3, 1.03);
		box-shadow: 0 0 10px #101010;
	}

	&:hover ${CarouselItemBackground} {
		transition: transform 350ms 500ms
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

export const Rating = styled.span`
	height: 10px;
	width: 10px;
	background-color: ${(props) => {
		switch (props.children) {
			case "U":
				return "green";

			case "PG":
				return "yellow";

			case "12":
				return "orange";

			case "12A":
				return "orange";

			case "15":
				return "hotpink";

			case "18":
				return "red";
			default:
				return "white";
		}
	}};
	display: grid;
	place-items: center;
	padding: 3px;
	border-radius: 50%;
	border: white solid 1px;
	font-weight: 600;
	font-size: 0.5rem;
`;
