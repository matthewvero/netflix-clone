/** @format */

import React from "react";
import {
	Button,
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
			<p
				style={{
					margin: "0",
					fontSize: "16px",
					color: "#333333",
				}}
			>
				STEP{" "}
				<span
					style={{
						fontWeight: "600",
					}}
				>
					1
				</span>{" "}
				OF{" "}
				<span
					style={{
						fontWeight: "600",
					}}
				>
					3
				</span>
			</p>
			<h2
				style={{
					margin: "3px 0 13px",
					fontSize: "32px",
					color: "#333333",
				}}
			>
				Create your password!
			</h2>
			<p
				style={{
					textAlign: "left",
					fontSize: "1.2rem",
					margin: "0",
					color: "#333333",
				}}
			>
				Just a few more steps before you can watch Netflix
			</p>
			<p
				style={{
					textAlign: "left",
					fontSize: "1.2rem",
					margin: "0",
				}}
			>
				– it’s personalised for you!
			</p>
			<SignupFormInputBox>
				<ValidatedEmail api={formApi} />
				<InputLabel>Email</InputLabel>
			</SignupFormInputBox>
			{state.errors["email"] &&
				state.interacted["email"] &&
				state.errors["email"].map((el, idx) => (
					<p
						key={idx}
						style={{
							margin: "5px 0",
							color: "#b92d2b",
							fontSize: "13px",
						}}
					>
						{el}
					</p>
				))}
			<SignupFormInputBox>
				<ValidatedPassword api={formApi} />
				<InputLabel>Add a password</InputLabel>
			</SignupFormInputBox>
			{state.errors["password"] &&
				state.interacted["password"] &&
				state.errors["password"].map((el, idx) => (
					<p
						key={idx}
						style={{
							margin: "5px 0",
							color: "#b92d2b",
							fontSize: "13px",
						}}
					>
						{el}
					</p>
				))}

			<Button
				type="submit"
				style={{
					width: "100%",
					height: "64px",
					minHeight: "64px",
					marginTop: "20px",
					fontSize: "24px",
					boxShadow: "1px 1px rgb(0 0 0 / 25%)",
					borderRadius: "4px",
				}}
			>
				{" "}
				Next{" "}
			</Button>
		</SignupFormContainer>
	);
};
