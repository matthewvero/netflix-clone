/** @format */

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../../../components/misc/inputs.styles";
import { Heading } from "../../../../components/misc/text.styles";
import { UserContext } from "../../../../components/user.context";
import { updateDocument } from "../../../../firebase.utils";
import { ListIcon } from "../../signuppage.styles";
import {
	PlanCell,
	PlanLabel,
	PlansContainer,
	PlansLabelsContainer,
	TitleCell,
} from "../perkspage/perkspage.styles";
import { PlanFormContainer } from "./planspage.styles";

export const PlansPage = ({ $ref }) => {
	const [selectedPlan, setSelectedPlan] = useState(3);
	const user = useContext(UserContext);
	useEffect(() => {}, []);
	const selectPlan = async (e) => {
		e.preventDefault();
		try {
			await updateDocument(user.uid, "users", {
				...user,
				plan: selectedPlan,
				signUpState: 2,
			});
			const popStateEvent = new PopStateEvent("popstate");
			dispatchEvent(popStateEvent);
		} catch (err) {
			alert(err);
		}
	};

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
		<PlanFormContainer
			onSubmit={(e) => selectPlan(e)}
			className="plansform"
			ref={$ref}
		>
			<div className="plansheadingcontainer">
				<p
					style={{
						margin: "0",
						fontSize: "13px",
						color: "#333333",
					}}
				>
					STEP <span>2</span> OF <span>3</span>
				</p>
				<Heading>Choose the plan that’s right for you</Heading>
				<ul>
					<li>
						<ListIcon icon={faCheck} />
						<p>Watch all you want. Advert-free.</p>
					</li>
					<li>
						<ListIcon icon={faCheck} />
						<p>Recommendations just for you.</p>
					</li>
					<li>
						<ListIcon icon={faCheck} />
						<p>Change or cancel your plan anytime.</p>
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
			<Button className="formbutton">Next</Button>
		</PlanFormContainer>
	);
};
