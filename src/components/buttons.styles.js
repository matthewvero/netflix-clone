/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components/macro";

export const CircleButton = styled.div`
	min-height: 20px;
	min-width: 20px;
	margin: 1.5%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: #2a2a2a;
	border: #aaaaaa 1px solid;
	text-align: middle;
	&.right {
		margin-left: auto;
	}
	&.large {
		min-height: 40px;
		min-width: 40px;
	}
	&:hover {
		border: #eeeeee 1px solid;
	}
`;

export const CircleButtonIcon = styled(FontAwesomeIcon)`
	font-size: 0.5rem;
	color: white;
`;

export const Button = styled.button`
	height: 40px;
	padding: 0 16px;
	background-color: #e50914;
	border: none;
	border-radius: 2px;
	margin-top: 4px;
	font-family: Arial, Helvetica, sans-serif;
	color: white;
	font-size: 1rem;
	cursor: pointer;
	display: flex;
	justify-content: space-around;
	align-items: center;
	&:hover {
		background-color: #f40612;
	}
	&:active {
		background-color: #e50914;
	}
`;

const BannerButton = styled.button`
	padding: 8px 20px;
	border: none;
	border-radius: 3px;
	font-weight: 600;
	cursor: pointer;
	width: 100%;
	margin: 3px 0;
	display: grid;
	place-items: center;
	grid-template-columns: auto auto;
	grid-gap: 10px;
	white-space: nowrap;
	@media (min-width: 600px) {
		width: auto;
		margin-right: 7px;
	}
	& .bannericon {
		margin: 0 5px;
	}
	&.large {
		font-size: 1.1rem;
		padding: 10px 25px;
	}
`;

export const BannerPlayButton = styled(BannerButton)`
	background-color: white;
	color: black;
	&:hover {
		background-color: rgba(255, 255, 255, 0.75);
	}
	&:active {
		background-color: rgba(255, 255, 255, 0.5);
	}
`;

export const BannerInfoButton = styled(BannerButton)`
	background-color: rgba(109, 109, 110, 0.7);
	color: white;

	&:hover {
		background-color: rgba(109, 109, 110, 0.4);
	}
	&:active {
		background-color: rgba(109, 109, 110, 0.3);
	}
`;
