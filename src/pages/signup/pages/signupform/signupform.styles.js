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
`;
