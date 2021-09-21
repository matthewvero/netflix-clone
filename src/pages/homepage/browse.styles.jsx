/** @format */

import styled from "styled-components/macro";

export const BrowsePageContainer = styled.div`
	width: 100%;
	min-height: 150vh;
	background-color: #141414;
	overflow: hidden;
`;

export const BrowsePageHeader = styled.header`
	z-index: 1000;
	position: fixed;
	top: 10px;
	left: 0;
	width: 100%;
	height: 6vh;
	padding: 0 50px;
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
	margin: 0 3%;
	height: auto;
	width: auto;
	font-size: 1rem;
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

export const FeaturedBanner = styled.div`
	position: relative;
	width: 100%;
	height: 500px;

	margin-bottom: -10%;
	box-sizing: border-box;
	background-image: url(${(props) => props.$backgroundImage});
	background-position: 0% 40%;
	background-size: 120% auto;
	background-repeat: no-repeat;

	overflow: hidden;

	&:after {
		content: " ";
		width: 100%;
		height: 40%;
		position: absolute;
		bottom: 0;
		left: 0;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(20, 20, 20, 1) 100%
		);
	}
	@media (min-width: 1100px) {
		background-size: cover;
		height: 750px;
	}
`;

export const BannerContentContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 40px;
	box-sizing: border-box;
	background: linear-gradient(
		90deg,
		rgba(20, 20, 20, 1) 0%,
		rgba(20, 20, 20, 0.3) 40%,
		rgba(20, 20, 20, 0) 50%,
		rgba(20, 20, 20, 0.3) 60%,
		rgba(20, 20, 20, 1) 100%
	);
`;

export const BannerContent = styled.div`
	height: 100%;
	width: 35%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (min-width: 1000px) {
		width: 30%;
	}
`;

export const BannerOverview = styled.h3`
	color: white;
	font-size: 0.9rem;
	text-align: left;
	margin: 0;
	height: 45%;
`;

const BannerButton = styled.button`
	padding: 8px 20px;
	border: none;
	border-radius: 3px;
	margin-right: 7px;
	font-weight: 600;
	cursor: pointer;
	& .bannericon {
		margin: 0 5px;
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
