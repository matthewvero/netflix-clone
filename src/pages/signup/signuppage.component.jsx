/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Route, withRouter, useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { UserContext } from "../../components/user.context";

import { useFormValidator } from "../../hooks/form-validator/form-validator";
import { PerksPage, PlansPage, SignupForm } from "./signup.pages";

import { FormContainer, SignupPageContainer } from "./signuppage.styles";

const SignupPage = ({ location }) => {
	const [locationKeys, setLocationKeys] = useState([]);
	const [forward, setForward] = useState(false);
	const user = useContext(UserContext);

	const history = useHistory();
	const formApi = useFormValidator({
		email: location.state ? location.state.email : "",
	});

	useEffect(() => {
		// Check if user has signed up and reroute
		if (user) {
			history.push("/signup/perks");
		} else {
			history.push("/signup/form");
		}

		// Manually dispatch popstate event because history.push does not (this will trigger the animations).
		const popStateEvent = new PopStateEvent("popstate");
		dispatchEvent(popStateEvent);
	}, [history, user]);

	useEffect(() => {
		// Detect back and forward and change animation direction accordingly
		return history.listen((location) => {
			if (history.action === "PUSH") {
				setLocationKeys([location.key]);
			}

			if (history.action === "POP") {
				if (locationKeys[1] === location.key) {
					setLocationKeys(([_, ...keys]) => keys);
					setForward(true);
					// Handle forward event
				} else {
					setLocationKeys((keys) => [
						location.key,
						...keys,
					]);
					setForward(false);
					// Handle back event
				}
			}
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [locationKeys]);

	return (
		<SignupPageContainer>
			<FormContainer>
				<BrowserRouter>
					<Route path={"/signup/form"} exact>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={400}
								classNames={
									forward === true
										? "forward"
										: "firstpage"
								}
								unmountOnExit
							>
								<SignupForm formApi={formApi} />
							</CSSTransition>
						)}
					</Route>
					<Route path={"/signup/perks"} exact>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={400}
								classNames={
									forward === true
										? "forward"
										: "backward"
								}
								unmountOnExit
							>
								<PerksPage />
							</CSSTransition>
						)}
					</Route>
					<Route path={"/signup/plans"} exact>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={400}
								classNames={
									forward === true
										? "forward"
										: "backward"
								}
								unmountOnExit
							>
								<PlansPage />
							</CSSTransition>
						)}
					</Route>
				</BrowserRouter>
			</FormContainer>
		</SignupPageContainer>
	);
};

export default withRouter(SignupPage);
