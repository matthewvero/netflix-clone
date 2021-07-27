/** @format */

import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import {
	Button,
	InputBox,
	InputLabel,
	SignupFormInputBox,
} from "../../components/misc/inputs.styles";
import { Heading } from "../../components/misc/text.styles";
import { signupUser } from "../../firebase.utils";
import { withValidation } from "../../hooks/form-validator/form-validator";
import {
	FormPage,
	PlanCell,
	PlansContainer,
	PlanLabel,
	PlansLabelsContainer,
	TitleCell,
} from "./signuppage.styles";

const ValidatedEmail = withValidation(InputBox, "email", "email", {
	required: true,
});
const ValidatedPassword = withValidation(InputBox, "password", "password", {
	minLength: 6,
	required: true,
});

export const SignupForm = ({ formApi }) => {
	const { handleSubmit, state } = formApi;
	return (
		<FormPage
			style={{ marginTop: "20px" }}
			onSubmit={(e) =>
				handleSubmit(e, () =>
					signupUser(
						state.values.email,
						state.values.password
					)
				)
			}
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
		</FormPage>
	);
};

export const PerksPage = () => {
	const history = useHistory();
	return (
		<FormPage
			style={{
				paddingTop: "40px",
			}}
			onSubmit={(e) => {
				e.preventDefault();
				history.push("/signup/plans");
				const popStateEvent = new PopStateEvent("popstate");
				dispatchEvent(popStateEvent);
			}}
		>
			<div
				style={{
					width: "340px",
					height: "auto",
					margin: "auto",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					boxSizing: "border-box",
				}}
			>
				<FontAwesomeIcon
					icon={faCheckCircle}
					style={{
						color: "#e50914",
						fontSize: "3rem",
						margin: "80px 0 20px 0",
					}}
				/>
				<p
					style={{
						fontSize: "13px",
						margin: "0",
					}}
				>
					Step{" "}
					<span
						style={{
							fontWeight: "600",
						}}
					>
						1
					</span>{" "}
					of{" "}
					<span
						style={{
							fontWeight: "600",
						}}
					>
						3
					</span>
				</p>
				<Heading
					style={{
						color: "black",
						margin: "0 0 20px 0",
						fontSize: "32px",
					}}
				>
					Choose your plan
				</Heading>
				<ul
					style={{
						margin: "15px 0 20px 0",
						padding: "0 5%",
					}}
				>
					<li
						style={{
							display: "flex",
						}}
					>
						<FontAwesomeIcon
							icon={faCheck}
							style={{
								fontSize: "1.3rem",
								color: "#e50914",
							}}
						/>
						<p
							style={{
								fontSize: "18px",
								textAlign: "left",
								margin: "0",
							}}
						>
							No commitments, cancel at any time.
						</p>
					</li>
					<li
						style={{
							display: "flex",
							marginTop: "20px",
						}}
					>
						<FontAwesomeIcon
							icon={faCheck}
							style={{
								fontSize: "1.3rem",
								color: "#e50914",
							}}
						/>
						<p
							style={{
								fontSize: "18px",
								textAlign: "left",
								margin: "0",
							}}
						>
							Everything on Netflix for one low
							price.
						</p>
					</li>
					<li
						style={{
							display: "flex",
							marginTop: "20px",
						}}
					>
						<FontAwesomeIcon
							icon={faCheck}
							style={{
								fontSize: "1.3rem",
								color: "#e50914",
							}}
						/>
						<p
							style={{
								fontSize: "18px",
								textAlign: "left",
								margin: "0",
							}}
						>
							Unlimited viewing on all your devices.
						</p>
					</li>
				</ul>
				<Button
					style={{
						width: "100%",
						height: "64px",
						fontSize: "24px",
						marginTop: "24px",
						boxShadow: "0 1px 1px rgba(0,0,0, 0.25)",
					}}
				>
					Next
				</Button>
			</div>
		</FormPage>
	);
};

export const PlansPage = () => {
	const [selectedPlan, setSelectedPlan] = useState(2);
	const plans = [
		{
			id: 0,
			title: "Basic",
			price: "5.99",
			videoQuality: "Good",
			resolution: "480p",
		},
		{
			id: 1,
			title: "Standard",
			price: "9.99",
			videoQuality: "Better",
			resolution: "1080p",
		},
		{
			id: 2,
			title: "Premium",
			price: "13.99",
			videoQuality: "Best",
			resolution: "4k+HDR",
		},
	];

	const categories = [
		"Monthly price",
		"Video quality",
		"Resolution",
		"Watch on your TV, computer, mobile phone and tablet",
	];

	// Reorder object so that it can be mapped out in rows.
	const reorganizedPlans = Object.keys(plans).reduce(
		(acc, cur) => {
			return {
				...acc,

				prices: [...acc.prices, plans[cur].price],
				videoQuality: [
					...acc.videoQuality,
					plans[cur].videoQuality,
				],
				resolution: [...acc.resolution, plans[cur].resolution],
			};
		},
		{ prices: [], videoQuality: [], resolution: [] }
	);

	return (
		<FormPage
			style={{
				boxSizing: "border-box",
				width: "100%",
				marginTop: "30px",
				maxWidth: "1000px",
			}}
		>
			<div
				style={{
					marginLeft: "15px",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
				}}
			>
				<p
					style={{
						margin: "0",
						fontSize: "13px",
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
				<Heading
					style={{
						color: "black",
						fontWeight: "600",
						fontSize: "32px",
						margin: "0",
						textAlign: "left",
					}}
				>
					Choose the plan that’s right for you
				</Heading>
				<ul
					style={{
						margin: "15px 0 20px 0",
						padding: "0",
					}}
				>
					<li
						style={{
							display: "flex",
						}}
					>
						<FontAwesomeIcon
							icon={faCheck}
							style={{
								fontSize: "1.3rem",
								color: "#e50914",
								marginRight: "3px",
							}}
						/>
						<p
							style={{
								fontSize: "18px",
								textAlign: "left",
								margin: "0",
							}}
						>
							Watch all you want. Advert-free.
						</p>
					</li>
					<li
						style={{
							display: "flex",
							marginTop: "15px",
						}}
					>
						<FontAwesomeIcon
							icon={faCheck}
							style={{
								fontSize: "1.3rem",
								color: "#e50914",
								marginRight: "3px",
							}}
						/>
						<p
							style={{
								fontSize: "18px",
								textAlign: "left",
								margin: "0",
							}}
						>
							Recommendations just for you.
						</p>
					</li>
					<li
						style={{
							display: "flex",
							marginTop: "15px",
						}}
					>
						<FontAwesomeIcon
							icon={faCheck}
							style={{
								fontSize: "1.3rem",
								color: "#e50914",
								marginRight: "3px",
							}}
						/>
						<p
							style={{
								fontSize: "18px",
								textAlign: "left",
								margin: "0",
							}}
						>
							Change or cancel your plan anytime.
						</p>
					</li>
				</ul>
			</div>
			<PlansLabelsContainer>
				{plans.map((el, i) => (
					<PlanCell onClick={() => setSelectedPlan(i)}>
						<PlanLabel
							className={
								i === selectedPlan && "selected"
							}
						>
							{el.title}
						</PlanLabel>
					</PlanCell>
				))}
			</PlansLabelsContainer>
			<PlansContainer>
				{Object.keys(reorganizedPlans).map((key, j) => (
					<React.Fragment>
						<TitleCell>{categories[j]}</TitleCell>
						{reorganizedPlans[key].map((el, idx) => (
							<PlanCell
								className={
									idx === selectedPlan &&
									"selected"
								}
								onClick={() =>
									setSelectedPlan(idx)
								}
							>
								{el}
							</PlanCell>
						))}
					</React.Fragment>
				))}
				<TitleCell className="last">{categories[3]}</TitleCell>
				{plans.map((el, idx) => (
					<PlanCell
						className={
							idx === selectedPlan && "selected"
						}
						onClick={() => setSelectedPlan(idx)}
					>
						<FontAwesomeIcon icon={faCheck} />
					</PlanCell>
				))}
			</PlansContainer>
			<p className="fineprint">
				HD (720p), Full HD (1080p), Ultra HD (4K) and HDR
				availability subject to your internet service and device
				capabilities. Not all content is available in all
				resolutions. See our Terms of Use for more details.
			</p>
			<p className="fineprint">
				Only people who live with you may use your account.
				Watch on 4 different devices at the same time with
				Premium, 2 with Standard and 1 with Basic.
			</p>
			<Button
				style={{
					width: "440px",
					height: "64px",
					fontSize: "24px",
					alignSelf: "center",
					marginTop: "20px",
				}}
			>
				Next
			</Button>
		</FormPage>
	);
};
