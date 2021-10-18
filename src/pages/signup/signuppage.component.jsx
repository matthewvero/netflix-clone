/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import { Route, withRouter, useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { UserContext } from "../../components/contexts";
import { ReactComponent as ReactLogo } from "../../logo.svg";

import { useFormValidator } from "../../hooks/form-validator/form-validator";
import PaymentPage from "./pages/paymentpage/paymentpage.component";
import PerksPage from "./pages/perkspage/perkspage.component";
import { PlansPage } from "./pages/planspage/planspage.component";
import { SignupForm } from "./pages/signupform/signupform.component";

import { FormContainer, SignupPageContainer, SignupPageheader } from "./signuppage.styles";

const SignupPage = ({ location }) => {
	const [locationKeys, setLocationKeys] = useState([]);
	const [forward, setForward] = useState(false);
	const user = useContext(UserContext);
	const signupFormRef = useRef();
	const perksPageRef = useRef();
	const plansPageRef = useRef();
	const history = useHistory();
	const formApi = useFormValidator({
		email: location.state ? location.state.email : "",
	});

	useEffect(() => {
		// Check if user has signed up and reroute
		if (user) {
			switch (user.signUpState) {
				case 1:
					history.push("/signup/perks");
					break;
				case 2:
					history.push("/browse");
					break;
				default:
					history.push("/signup/perks");
			}
		} else {
			history.push("/signup/form");
		}

		// Manually dispatch popstate event because history.push does not (this will trigger the page switch animation).
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
			<SignupPageheader>
				<ReactLogo
						style={{
							maxHeight: "50%",
							maxWidth: "12.5%",
							minHeight: "43px",
							minWidth: "120px",
							paddingTop: "8px",
						}}
					/>
			</SignupPageheader>

			<FormContainer>
				<BrowserRouter>
					<Route path={"/signup/form"} exact>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={450}
								classNames={
									forward === true
										? "forward"
										: "firstpage"
								}
								unmountOnExit
								nodeRef={signupFormRef}
							>
								<SignupForm
									formApi={formApi}
									$ref={signupFormRef}
								/>
							</CSSTransition>
						)}
					</Route>
					<Route path={"/signup/perks"} exact>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={450}
								classNames={
									forward === true
										? "forward"
										: "backward"
								}
								unmountOnExit
								nodeRef={perksPageRef}
							>
								<PerksPage
									$ref={perksPageRef}
								/>
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
								nodeRef={plansPageRef}
							>
								<PlansPage
									$ref={plansPageRef}
								/>
							</CSSTransition>
						)}
					</Route>
					<Route path={"/signup/payment"} exact>
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
								nodeRef={plansPageRef}
							>
								<PaymentPage
									$ref={plansPageRef}
								/>
							</CSSTransition>
						)}
					</Route>
				</BrowserRouter>
			</FormContainer>
		</SignupPageContainer>
	);
};

export default withRouter(SignupPage);
