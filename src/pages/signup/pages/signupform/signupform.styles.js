/** @format */

import styled from "styled-components";
import { FormPage } from "../../signuppage.styles";

export const SignupFormContainer = styled(FormPage)`
	&.firstpage-enter {
		position: absolute;
	}

	&.firstpage-exit {
		opacity: 1;
		position: absolute;
	}
	&.firstpage-exit-active {
		transform: translateX(25%);
		opacity: 0;
		transition: all 200ms;
	}

	& .signupsubheading {
		text-align: left;
		font-size: 1.2rem;
		margin: 0;
		color: #333333;
	}

	& .signupheading {
		margin: 3px 0 13px;
		font-size: 32px;
		color: #333333;
	}

	& .inputerror {
		margin: 5px 0;
		color: #b92d2b;
		font-size: 13px;
	}

	& .signupbutton {
		width: 100%;
		height: 64px;
		font-size: 24px;
		margin-top: 20px;
	}
`;
