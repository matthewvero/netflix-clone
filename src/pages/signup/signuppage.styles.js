/** @format */

import styled from "styled-components/macro";
import { Page } from "../page.styles";
export const SignupPageContainer = styled(Page)`
	background-color: white;
`;

export const FormContainer = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FormPage = styled.form`
	height: 100%;
	width: 500px;
	padding: 0 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	&.forward-enter {
		opacity: 0;
		transform: translateX(50%);
		position: absolute;
	}
	&.forward-enter-active {
		transform: translateX(0%);
		opacity: 1;
		transition: all 200ms;
	}

	&.forward-exit {
		opacity: 1;
		position: absolute;
	}
	&.forward-exit-active {
		transform: translateX(-50%);
		opacity: 0;
		transition: all 200ms;
	}

	&.backward-enter {
		opacity: 0;
		transform: translateX(-50%);
		position: absolute;
	}
	&.backward-enter-active {
		transform: translateX(0%);
		opacity: 1;
		transition: all 200ms;
	}

	&.backward-exit {
		opacity: 1;
		position: absolute;
	}
	&.backward-exit-active {
		transform: translateX(50%);
		opacity: 0;
		transition: all 200ms;
	}

	&.firstpage-enter {
		position: absolute;
	}

	&.firstpage-exit {
		opacity: 1;
		position: absolute;
	}
	&.firstpage-exit-active {
		transform: translateX(50%);
		opacity: 0;
		transition: all 200ms;
	}
	& > .fineprint {
		font-size: 13px;
		color: #737373;
		text-align: left;
		padding-right: 150px;
		margin: 10px 0 0 16px;
		@media (max-width: 600px) {
			padding: 0px 10px 0 10px;
			margin-left: 0;
		}
	}
`;

export const PlanCell = styled.div`
	min-height: 61px;
	max-height: 90px;
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

export const PlanValue = styled.p``;
