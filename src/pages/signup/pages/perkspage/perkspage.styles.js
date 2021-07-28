/** @format */

import styled from "styled-components";
import { FormPage } from "../../signuppage.styles";

export const PerksContainer = styled(FormPage)`
	width: 340px;
	height: auto;
	margin: auto;
	align-items: center;
	padding-top: 40px;
	& > .perksbutton {
		width: 100%;
		height: 64px;
		font-size: 24px;
		margin-top: 20px;
	}

	& .perkspage > li {
		margin: 25px 0 0;

		:first-of-type {
			margin: 15px 0 0;
		}
	}

	& ul.perkspage {
		margin: 0 0 20px 0;
		padding: 0 5%;
	}
`;

export const PlanCell = styled.div`
	height: 61px;
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #737373;
	font-weight: 600;
	cursor: pointer;
	box-sizing: border-box;
	&.selected {
		color: #e50914;
	}

	@media (max-width: 600px) {
		width: calc(100% / 3);
		min-height: 50px;
		height: 50px;
	}
`;
export const TitleCell = styled(PlanCell)`
	width: 40%;
	justify-content: flex-start;
	text-align: left;
	padding: 0 50px 0 15px;
	cursor: default;
	@media (max-width: 600px) {
		margin-top: 10px;
		width: 100%;
		min-height: 20px;
		height: 20px;
		justify-content: center;
		padding: 0px;
		font-size: 13px;
		color: #333333;
	}
`;

export const PlansContainer = styled.div`
	margin: 10px auto;
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	box-sizing: border-box;
	position: relative;
	align-content: flex-start;
	& > ${TitleCell}:not(:nth-child(13)) {
		:after {
			content: " ";
			position: absolute;
			width: 100%;
			background-color: #cccccc;
			height: 1px;
			transform: translateY(30px) translateX(-15px);
			@media (max-width: 600px) {
				transform: translateY(62px);
			}
		}
	}
	@media (max-width: 600px) {
		height: 320px;
	}
`;

export const PlansLabelsContainer = styled.div`
	height: 90px;
	display: flex;
	justify-content: flex-end;
	width: 100%;
	align-items: center;
	@media (max-width: 600px) {
		justify-content: space-between;
	}
	@media (min-width: 950px) {
		height: 120px;
	}
`;

export const PlanLabel = styled.label`
	height: 90px;
	width: 90px;
	background-color: #e50914;
	border-radius: 2px;
	opacity: 0.4;
	display: grid;
	place-items: center;
	color: white;
	font-weight: 600;
	font-size: 17px;
	position: relative;
	cursor: pointer;
	margin: 5px 5%;
	&.selected {
		opacity: 1;
		box-shadow: 0px 0px 3px #e50914;
		::after {
			content: " ";
			position: absolute;
			height: 20px;
			width: 20px;
			background-color: #e50914;
			bottom: -7px;
			transform: rotate(45deg);
		}
	}
	@media (max-width: 600px) {
		width: 100%;
		height: 75px;
		margin: 5px 2.5%;
	}
	@media (min-width: 950px) {
		height: 120px;
		width: 120px;
	}
`;
