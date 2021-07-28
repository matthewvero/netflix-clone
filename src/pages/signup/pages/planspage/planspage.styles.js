/** @format */

import styled from "styled-components";
import { Heading } from "../../../../components/misc/text.styles";
import { FormPage } from "../../signuppage.styles";

export const PlanFormContainer = styled(FormPage)`
	& ${Heading} {
		color: black;
		font-weight: 600;
		font-size: 32px;
		margin: 0;
		text-align: left;
	}

	& ul {
		margin: 4px 0 20px 0;
		padding: 0;
	}

	& .plansheadingcontainer {
		margin-left: 15px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
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
	&.plansform {
		box-sizing: border-box;
		width: 100%;
		margin-top: 30px;
		max-width: 1000px;
		height: 700px;
	}

	& .formbutton {
		width: 440px;
		min-height: 64px;
		height: 64px;
		font-size: 24px;
		align-self: center;
		margin-top: 20px;
		border-radius: 4px;
	}
`;
