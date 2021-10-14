/** @format */

import styled from "styled-components/macro";
import { ReactComponent as Logo } from "../../logo.svg";
export const BrowsePageContainer = styled.div`
	width: 100%;
	min-height: 150vh;
	background-color: #141414;
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

export const BrowsePageHeader = styled.header`
	z-index: 100000;
	position: fixed;
	top: 0px;
	left: 0;
	width: 100%;
	height: 100px;
	padding: 10px 30px 0 30px;
	box-sizing: border-box;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: rgb(0, 0, 0);
	background: -moz-linear-gradient(
		0deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.9206057422969187) 100%
	);
	background: -webkit-linear-gradient(
		0deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.9206057422969187) 100%
	);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.9206057422969187) 100%
	);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
	@media (min-width: 950px) {
		height: 75px;
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
		height: 60%;
		position: absolute;
		bottom: 0;
		left: 0;
		background: rgb(0, 0, 0);
		background: -moz-linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 100%
		);
		background: -webkit-linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 100%
		);
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 100%
		);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
		@media (min-width: 1000px) {
			height: 40%;
		}
	}
	@media (min-width: 1100px) {
		background-size: cover;
		height: 600px;
	}
`;

export const BannerContentContainer = styled.div`
	position: absolute;
	bottom: 50px;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	padding: 100px 40px;
	align-items: center;
	justify-content: flex-end;
	box-sizing: border-box;
	background: linear-gradient(
		90deg,
		rgba(20, 20, 20, 1) 0%,
		rgba(20, 20, 20, 0.3) 40%,
		rgba(20, 20, 20, 0) 50%,
		rgba(20, 20, 20, 0.3) 60%,
		rgba(20, 20, 20, 1) 100%
	);
	@media (min-width: 800px) {
		justify-content: center;
		align-items: flex-start;
	}
`;

export const BannerContent = styled.div`
	height: auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 1;

	@media (min-width: 800px) {
		width: 40%;
	}
	@media (min-width: 1000px) {
		width: 30%;
	}
`;

export const BannerOverview = styled.h3`
	color: white;
	font-size: 0.9rem;
	margin: 0;
	height: 45%;
	@media(min-width: 800px) {
		text-align: left;
	}
`;

export const BannerButtonContainer = styled.div`
	margin-top: 13px;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 20%;
	@media(min-width: 800px) {
		justify-content: flex-start;
		gap: 0;
	}
`;

export const BannerTitle = styled.h2`
	font-size: 3rem;
	margin: 0;

`

export const NetflixLogo = styled(Logo)`
	max-height: 70%;
	max-width: 20%;
	margin-right: 3%;
	@media (max-width: 1200px) {
		max-width: 30%;
	}
	@media (max-width: 650px) {
		max-width: 40%;
	}
`;

