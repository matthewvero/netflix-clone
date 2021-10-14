/** @format */

import React from "react";
import { Button } from "../../../../components/buttons.styles";
import FormErrors from "../../../../components/form-errors/form-errors.component";
import {
	InputBox,
	InputLabel,
	SignupFormInputBox,
} from "../../../../components/misc/inputs.styles";
import { signupUser } from "../../../../firebase.utils";
import { withValidation } from "../../../../hooks/form-validator/form-validator";

import { SignupFormContainer } from "./signupform.styles";

const ValidatedEmail = withValidation(InputBox, "email", "email", {
	required: true,
});
const ValidatedPassword = withValidation(InputBox, "password", "password", {
	minLength: 6,
	required: true,
});

export const SignupForm = ({ formApi, $ref }) => {
	const { handleSubmit, state } = formApi;
	return (
		<SignupFormContainer
			style={{ marginTop: "20px" }}
			onSubmit={(e) =>
				handleSubmit(e, () =>
					signupUser(
						state.values.email,
						state.values.password
					)
				)
			}
			ref={$ref}
		>
			<p className="step">
				STEP <span>1</span> OF <span>3</span>
			</p>
			<h2 className="signupheading">Create your password!</h2>
			<p className="signupsubheading">
				Just a few more steps before you can watch Netflix
			</p>
			<p className="signupsubheading">
				– it’s personalised for you!
			</p>
			<SignupFormInputBox>
				<ValidatedEmail api={formApi} />
				<InputLabel>Email</InputLabel>
			</SignupFormInputBox>
			<FormErrors state={state} inputName='email'/>
			<SignupFormInputBox>
				<ValidatedPassword api={formApi} />
				<InputLabel>Add a password</InputLabel>
			</SignupFormInputBox>
			<FormErrors state={state} inputName='password'/>
			<Button type="submit" className="signupbutton">
				{" "}
				Next{" "}
			</Button>
		</SignupFormContainer>
	);
};
