/** @format */

import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { CSSTransition } from "react-transition-group";
import {
	FormInputContainer,
	InputLabel,
} from "../../components/misc/inputs.styles";
import { useFormValidator, ValidatedInput } from "../../hooks/form-validator";
import {
	FormContainer,
	FormPage,
	SignupPageContainer,
} from "./signuppage.styles";

const SignupPage = ({ location }) => {
	const [prevPage, setPrevPage] = useState(0);
	const [direction, setDirection] = useState("+");
	const [currentPage, setCurrentPage] = useState(0);

	const { errors, interacted, api } = useFormValidator();

	return (
		<SignupPageContainer>
			<FormContainer>
				<CSSTransition
					in={currentPage === 0}
					classNames="formpage"
					unmountOnExit
					timeout={200}
				>
					<FormPage direction={direction}>
						<p
							style={{
								margin: "0",
								fontSize: "0.8rem",
							}}
						>
							STEP 1 OF 3
						</p>
						<h2 style={{ margin: "3px 0 7.5px" }}>
							Create your password!
						</h2>
						<p
							style={{
								textAlign: "left",
								fontSize: "1.2rem",
								margin: "0",
							}}
						>
							Just a few more steps before you can
							watch Netflix
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
						<FormInputContainer>
							<ValidatedInput
								$api={api}
								$name={"email"}
								$type={"email"}
								$rules={{
									minLength: "6",
									maxLength: "30",
								}}
							/>
							<InputLabel>Email</InputLabel>
						</FormInputContainer>
						{errors["email"] &&
							interacted["email"] &&
							errors["email"].map((el, idx) => (
								<p
									key={idx}
									style={{
										margin: "5px 0",
										color: "crimson",
									}}
								>
									{el}
								</p>
							))}
						<FormInputContainer>
							<ValidatedInput
								$api={api}
								$name={"password"}
								$type={"password"}
								$rules={{
									minLength: "6",
									maxLength: "30",
								}}
							/>
							<InputLabel>
								Add a password
							</InputLabel>
						</FormInputContainer>
						{errors["password"] &&
							interacted["password"] &&
							errors["password"].map((el, idx) => (
								<p
									key={idx}
									style={{
										margin: "5px 0",
										color: "crimson",
									}}
								>
									{el}
								</p>
							))}
						<button type="submit">submit </button>
					</FormPage>
				</CSSTransition>
			</FormContainer>
		</SignupPageContainer>
	);
};

export default withRouter(SignupPage);
