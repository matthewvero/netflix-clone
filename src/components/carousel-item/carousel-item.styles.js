/** @format */

import styled, { keyframes } from "styled-components/macro";

export const CarouselItemBackground = styled.img`
	width: 100%;
	height: 100%;
	min-height: 100%;
	position: absolute;
	object-fit: cover;
	will-change: transform;
	transition: all 300ms cubic-bezier(0.15, 0.75, 0.3, 1.03);
	border-radius: 6px;
`;

const fadein = keyframes`
	from {
		opacity: 0;
	} to {
		opacity: 1;
	}
`;

export const CarouselItemContent = styled.div`
	position: absolute;
	top: 73%;
	left: 0;
	width: 100%;
	place-items: center;
	grid-template-columns: auto;
	grid-auto-rows: auto;
	gap: 5px;
	padding: 6% 4% 4% 4%;
	box-sizing: border-box;
	display: none;
	border-radius: 6px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	background-color: #141414;
	transform-origin: top;
	opacity: 0;
	animation: ${fadein} 200ms linear 400ms 1 forwards;
`;

export const CarouselItemContainer = styled.div`
	position: relative;
	z-index: 0;
	min-height: 100%;
	min-width: calc(${(props) => props.$width}% - 4px);
	margin: 0 2px;
	display: flex;
	flex-direction: column-reverse;
	border-radius: 6px;
	color: white;
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
		z-index: 1000;
		transition: z-index 1ms 300ms linear, transform 350ms 500ms
			cubic-bezier(0.15, 0.75, 0.3, 1.03);
	}

	&:hover ${CarouselItemBackground} {
		transition: transform 350ms 500ms
			cubic-bezier(0.15, 0.75, 0.3, 1.03);
		transform: translateY(-25%);
	}
	&:hover ${CarouselItemContent} {
		display: grid;
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

export const Rating = styled.span`
	min-height: 10px;
	min-width: 10px;
	color: white;
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
				return "transparent";
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

export const GenresContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

export const GenreContentRow = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
`;
