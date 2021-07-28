/** @format */

import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import { Button } from "../../../../components/misc/inputs.styles";
import { Heading } from "../../../../components/misc/text.styles";
import { ListIcon } from "../../signuppage.styles";
import { PerksContainer } from "./perkspage.styles";

const PerksPage = ({ $ref }) => {
	const history = useHistory();
	return (
		<PerksContainer
			onSubmit={(e) => {
				e.preventDefault();
				history.push("/signup/plans");
				const popStateEvent = new PopStateEvent("popstate");
				dispatchEvent(popStateEvent);
			}}
			ref={$ref}
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
				Choose your plan.
			</Heading>
			<ul className="perkspage">
				<li>
					<ListIcon icon={faCheck} />
					<p>No commitments, cancel at any time.</p>
				</li>
				<li>
					<ListIcon icon={faCheck} />
					<p>Everything on Netflix for one low price.</p>
				</li>
				<li>
					<ListIcon icon={faCheck} />
					<p>Unlimited viewing on all your devices.</p>
				</li>
			</ul>
			<Button className="perksbutton">Next</Button>
		</PerksContainer>
	);
};

export default PerksPage;
