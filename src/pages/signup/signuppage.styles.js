/** @format */

import styled from "styled-components/macro";
import { Page } from "../page.styles";
export const SignupPageContainer = styled(Page)`
	background-color: white;
	padding-top: 40px;
`;

export const FormContainer = styled.div`
	width: 500px;
	height: 200px;
`;

export const FormPage = styled.form`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	formpage-enter {
		opacity: 0;
	}
	formpage-enter-active {
		opacity: 1;
		transition: opacity 200ms;
	}
	formpage-exit {
		opacity: 1;
	}
	formpage-exit-active {
		opacity: 0;
		transition: opacity 200ms;
	}
`;
