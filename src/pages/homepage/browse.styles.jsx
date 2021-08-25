/** @format */

import styled from "styled-components/macro";

export const BrowsePageContainer = styled.div`
	width: 100%;
	min-height: 150vh;
	background-color: #141414;
	overflow: hidden;
`;

export const BrowsePageHeader = styled.header`
	position: fixed;
	top: 10px;
	left: 0;
	width: 100%;
	height: 6vh;
	padding: 0 20px;
	box-sizing: border-box;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 950px) {
		height: 9vh;
	}
`;

export const HeaderSection = styled.div`
	height: 100%;
	width: 50%;
	max-width: 50%;
	display: flex;
	align-items: center;
	&.left {
		justify-content: flex-end;
	}
`;

export const HeaderLink = styled.a`
	margin: 0 2%;
	height: auto;
	width: auto;
	font-size: 0.7rem;
	font-weight: 600;
	color: #e5e5e5;
	cursor: pointer;
`;

export const HeaderItem = styled.div`
	margin: 0 2%;
	height: auto;
	width: auto;
	display: flex;
	align-items: center;
`;
