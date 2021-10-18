/** @format */

import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderItem } from "../../pages/homepage/browse.styles";

export const DropdownContainer = styled.div`
	position: absolute;
	bottom: -60px;
	transform: translateX(-75%);
	width: 200px;
	background-color: #000000bf;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border: 1px solid #444444;
	padding: 10px;

	&.dropdown-enter {
		transition: opacity 150ms linear;
		opacity: 0;
	}
	&.dropdown-enter-active {
		opacity: 1;
	}
	&.dropdown-exit {
		transition: opacity 150ms 400ms linear;
		opacity: 1;
	}
	&.dropdown-exit-active {
		opacity: 0;
	}
`;

export const SubMenuLink = styled.a`
	height: 30px;
	width: 100%;
	color: white;
	&:hover {
		text-decoration: underline;
	}
`;

export const SubMenu = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

export const HeaderDropdownContainer = styled(HeaderItem)`
	position: relative;
	overflow: visible;
	cursor: pointer;
`;

export const HeaderProfileIcon = styled.div`
	height: 30px;
	width: 30px;
	border-radius: 6px;
	background-color: yellow;
`;

export const HeaderDropdownIndicator = styled(FontAwesomeIcon)`
	color: white;
	margin-left: 10px;
	font-size: 1.2rem;
	transition: transform 150ms 200ms linear;
	&.rotate {
		transform: rotate(180deg);
	}
`;
