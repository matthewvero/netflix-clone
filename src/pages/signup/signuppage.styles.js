/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components/macro";
import { HeaderContainer } from "../../components/header/header.styles";
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
	max-width: 100%;
	padding: 0 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	@media (min-width: 750px) {
		width: 500px;
	}
	&.forward-enter {
		opacity: 0;
		transform: translateX(50%);
		position: absolute;
	}
	&.forward-enter-active {
		transform: translateX(0%);
		opacity: 1;
		transition: all 50ms 200ms;
	}

	&.forward-exit {
		opacity: 1;
		position: absolute;
	}
	&.forward-exit-active {
		transform: translateX(-25%);
		opacity: 0;
		transition: all 100ms;
	}

	&.backward-enter {
		opacity: 0;
		transform: translateX(-25%);
		position: absolute;
	}
	&.backward-enter-active {
		transform: translateX(0%);
		opacity: 1;
		transition: all 50ms 200ms;
	}

	&.backward-exit {
		opacity: 1;
		position: absolute;
	}
	&.backward-exit-active {
		transform: translateX(25%);
		opacity: 0;
		transition: all 100ms;
	}

	& li {
		display: flex;
		margin-top: 15px;
		list-style: none;
	}
	& li > p {
		font-size: 18px;
		text-align: left;
		margin: 0;
		color: #333333;
	}
	& p > span {
		font-weight: 600;
	}

	& .step {
		font-size: 13px;
		margin: 0;
	}
`;

export const ListIcon = styled(FontAwesomeIcon)`
	font-size: 1.3rem;
	color: #e50914;
	margin-right: 3px;
`;

export const SignupPageheader = styled(HeaderContainer)`
	background-color: transparent;
	background: none;
`;
